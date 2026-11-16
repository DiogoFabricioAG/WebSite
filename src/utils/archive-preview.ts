export function setupArchivePreview(playFolderTurn: () => void, lastFolderSoundAt: () => number, reducedMotion: MediaQueryList, root: HTMLElement) {
  const preview = document.querySelector<HTMLElement>('[data-archive-preview]');
  const files = preview?.querySelectorAll<HTMLAnchorElement>('[data-record]');
  files?.forEach(file => file.addEventListener('pointerenter', () => {
    if (performance.now() - lastFolderSoundAt() > 250) playFolderTurn();
  }));
  const backFolders = [preview?.querySelector<HTMLElement>('.backing-two'), preview?.querySelector<HTMLElement>('.backing-three')];
  const projectRecords = [...document.querySelectorAll<HTMLAnchorElement>('.archive-index [data-record]')].map(link => ({
    slug: link.dataset.record,
    label: `${link.querySelector('.index-number')?.textContent?.trim()} / ${link.querySelector('.index-title')?.childNodes[0]?.textContent?.trim()}`,
  }));
  let previewTimer: number | undefined;
  document.querySelectorAll<HTMLAnchorElement>('.archive-index [data-record]').forEach(link => {
    const showRecord = () => {
      if (!window.matchMedia('(min-width: 601px)').matches) return;
      const current = [...(files ?? [])].find(file => !file.hidden);
      const next = [...(files ?? [])].find(file => file.dataset.record === link.dataset.record);
      if (!next || !current) return;
      window.clearTimeout(previewTimer);
      current.classList.remove('file-leaving');
      if (current === next) return;
      current.classList.remove('file-entering');
      const swap = () => {
        playFolderTurn();
        current.hidden = true;
        current.classList.remove('file-leaving', 'file-entering');
        next.hidden = false;
        next.classList.remove('file-entering');
        const remaining = projectRecords.filter(record => record.slug !== next.dataset.record);
        backFolders.forEach((folder, index) => {
          const label = folder?.querySelector('span');
          if (label) label.textContent = remaining[index]?.label ?? '';
        });
        if (!reducedMotion.matches) {
          void next.offsetWidth;
          next.classList.add('file-entering');
          backFolders.forEach(folder => { folder?.classList.remove('folder-shuffle'); if (folder) { void folder.offsetWidth; folder.classList.add('folder-shuffle'); } });
        }
      };
      if (reducedMotion.matches || root.dataset.archiveOpening) { swap(); return; }
      current.classList.add('file-leaving');
      previewTimer = window.setTimeout(swap, 150);
    };
    link.addEventListener('pointerenter', showRecord);
    link.addEventListener('focus', showRecord);
  });
}
