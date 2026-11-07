import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const root = resolve('dist');
const origin = 'https://www.diogoabregu.tech';
const home = await readFile(join(root, 'index.html'), 'utf8');

test('homepage metadata is complete and the removed bot is absent from the build', async () => {
  for (const [html, route, language] of [[home, '/', 'en']]) {
    assert.match(html, new RegExp(`<html[^>]*lang="${language}"`));
    assert.match(html, /<meta[^>]*name="description"[^>]*content="[^"]+"/);
    assert.ok(html.includes(`rel="canonical" href="${origin}${route}"`));
    assert.doesNotMatch(html, /https:\/\/example\.com/);
  }
  await assert.rejects(access(join(root, 'bot/index.html')), { code: 'ENOENT' });
  assert.equal((home.match(/<h1\b/g) || []).length, 1);
  const jsonLd = JSON.parse(home.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(jsonLd['@type'], 'Person');
  assert.equal(jsonLd.name, 'Diogo Abregu');
});

test('homepage exposes work while keeping unverified claims and distracting scripts out of HTML', async () => {
  assert.equal((home.match(/class="project-card\b/g) || []).length, 3);
  for (const title of ['Meowlab', 'Capictive', 'Kromata System', 'RADAR', 'CHIMLE']) assert.ok(home.includes(title));
  assert.doesNotMatch(home, /Connect2|Diogo Bot|href="\/bot\/?"|me-virtual\.diogofabricio17/);
  assert.doesNotMatch(home, /TODO_VERIFY|40%|15\+/);
  assert.doesNotMatch(home, /<iframe\b|cursor-dot|project-carousel/);
  let scriptBytes = 0;
  for (const [, src] of home.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)) {
    assert.ok(src.startsWith('/_astro/'), 'Only local Astro-generated runtime scripts are expected');
    const script = await readFile(join(root, src), 'utf8');
    assert.doesNotMatch(script, /audio-player/);
    scriptBytes += Buffer.byteLength(script);
  }
  assert.ok(scriptBytes < 14000, 'Keep initial homepage scripts below 14 KB, including interface sounds');
  assert.ok(home.indexOf('id="proyectos"') < home.indexOf('id="engineering-focus"'));
});

test('owner-provided MD and current CV context is represented without restoring retired features', () => {
  const readable = home.replace(/&amp;|&#38;/g, '&');
  for (const text of ['Founder & AI Solutions Engineer', '~5,000', '~10,000', 'Candidates covered', 'M+S Metodologías', 'AWS Certified Cloud Practitioner', 'Sep 2026', 'LACCEI 2026', 'FacturaYa', 'FastAPI', 'Sales Cat']) {
    assert.ok(readable.includes(text), `Missing supplied context: ${text}`);
  }
  assert.ok(home.includes('In development'));
  assert.ok(readable.includes('System design & direction'));
});

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(join(directory, entry.name)) : entry.name.endsWith('.html') ? [join(directory, entry.name)] : []));
  return nested.flat();
}

test('all generated local links, fragments and image/script/style assets resolve', async () => {
  for (const path of await htmlFiles(root)) {
    const html = await readFile(path, 'utf8');
    const route = path.slice(root.length).replaceAll('\\', '/').replace(/index\.html$/, '');
    for (const [, raw] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|tel:|data:|\/\/)/.test(raw)) continue;
      const url = new URL(raw.replaceAll('&amp;', '&'), origin + route);
      if (url.origin !== origin) continue;
      let target = resolve(root, '.' + decodeURIComponent(url.pathname));
      if (!url.pathname.split('/').at(-1).includes('.')) target = join(target, 'index.html');
      await assert.doesNotReject(access(target), `Missing local target ${raw} in ${path}`);
      if (url.hash && target.endsWith('.html')) {
        const targetHtml = target === path ? html : await readFile(target, 'utf8');
        assert.ok(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing fragment ${raw}`);
      }
    }
  }
});

test('social preview and generated discovery files use the real canonical domain', async () => {
  const png = await readFile(join(root, 'social-card.png'));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert.ok(home.includes(`property="og:image" content="${origin}/social-card.png"`));
  assert.ok(home.includes('name="twitter:card" content="summary_large_image"'));
  const robots = await readFile(join(root, 'robots.txt'), 'utf8');
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`));
  const sitemap = await readFile(join(root, 'sitemap-0.xml'), 'utf8');
  assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
  assert.doesNotMatch(sitemap, /\/bot\//);
});
