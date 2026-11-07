# Portfolio P0 — auditoría, implementación y verificación

> Registro de la primera P0. La dirección visual posterior **Archivo Técnico**, sus cambios y las validaciones actuales están en [PORTFOLIO_ARCHIVE_DESIGN.md](PORTFOLIO_ARCHIVE_DESIGN.md). Las capturas enlazadas en este documento se han actualizado a esa dirección; los resultados y decisiones descritos aquí corresponden a la primera P0.

Fecha: 2026-11-05. Alcance: homepage de diogoabregu.tech. Se leyó íntegramente `PORTFOLIO_REDESIGN_CODEX.md`; ese archivo aportado por el propietario no se modificó.

## Diagnóstico inicial

| Área | Estado encontrado |
| --- | --- |
| Framework instalado | Astro 6.1.9, salida estática, React 19.1.1 e integración @astrojs/react 5.0.4 |
| Estilos / movimiento | Tailwind CSS 4.1.13 vía Vite, GSAP 3.13.0, CSS global, Raleway y Eagle Lake desde Google Fonts |
| Gestor / entorno | npm 10.6.0, package-lock.json, Node 22.17.1, Windows / PowerShell |
| Comandos existentes | `npm run dev`, `npm run build`, `npm run preview`, `npm run astro`; no había lint ni tests |
| Rutas | `/` y `/bot`; no hay páginas de casos de estudio |
| Idioma | Español en contenido, sin sistema i18n; el layout declaraba inglés |
| Composición | BaseLayout, BoxLayout, secciones Astro, tarjetas y modales; React configurado, sin componentes React locales en la portada |
| Datos | JSON para proyectos, experiencia y educación; perfil y enlaces dentro del hero |
| Activos | Retratos, logos, iconos, CV PDF y MP3 reales; sin capturas de producto suficientes para nuevos casos de estudio |
| Funciones especiales | Carrusel de proyectos, animaciones de scroll, cursor propio, reproductor flotante, formulario Google Forms y bot con API externa |
| SEO / analítica | Title básico, verificación de Search Console, sitemap con integración existente, URL `example.com` en config y un sitemap manual con el dominio real; sin canonical, description, OG ni robots configurados. No se detectó analytics activo |

Baseline: `npm run build` pasó antes de editar, generando las dos páginas. Chromium local encontró cuatro `h1` en la portada y ningún error JS durante la carga inicial a 1440 px. Esta inspección inicial no constituye una auditoría completa del sitio publicado.

Problemas prioritarios:

1. Identidad de “System Engineer & Founder” sin distinguir estudios en curso y foco profesional.
2. Experiencia antes que proyectos y trabajo oculto por carrusel con alturas rígidas.
3. Métricas, cargos y estados sin respaldo suficiente; tecnologías que discrepan de los repositorios actuales.
4. Meowlab ausente del contenido original.
5. Música, cursor y animaciones que compiten con la lectura del portafolio.
6. About, navegación y contacto existentes sin renderizar en la página principal; anchors apuntaban a secciones ausentes.
7. Semántica de encabezados e idioma inconsistentes; controles visuales dependientes de interacción.
8. SEO incompleto y dos fuentes de sitemap que podían discrepar.
9. Imágenes originales grandes para tamaños de visualización pequeños y fuentes remotas.
10. README de la plantilla y falta de verificaciones automatizadas.

## Plan aplicado

1. **Auditoría y baseline:** rutas, dependencias, estilos, activos, fuentes, CV y código público.
2. **Contenido:** fuente TypeScript pública, registro editorial privado, narrativa en inglés y selección de proyectos basada en código comprobable.
3. **Presentación:** mantener Astro y componentes por sección, aislar el layout de homepage, eliminar distracciones de la portada, resolver responsive y accesibilidad.
4. **SEO y QA:** dominio real en metadatos, social card, robots y sitemap generado; build, pruebas del HTML y revisión con Chromium.

## Decisiones de diseño y arquitectura

- Se mantiene el stack y la estructura `pages / layouts / sections / components / data / styles`. No se añade framework, CMS, backend ni dependencia de producción.
- `PortfolioLayout.astro` y `portfolio.css` aíslan la portada del layout del bot. El bot conserva su ruta, español, formulario, reproductor y servicio existente; no se modificó su API ni se enviaron conversaciones de prueba.
- Header → hero → Selected Work → Engineering Focus → Experience → About/Education/Community → Contact → footer.
- Fondo `#0b0d10`, superficie `#12161b`, texto `#f4f6f8`, secundario `#a6b0bd`, borde `#2c333d`, acento `#7aa8ff`. Contenedor de 1120 px y cards de 16 px.
- Sans de sistema (Segoe UI / Helvetica Neue / Arial), mono para etiquetas (Cascadia / Consolas). Sin nuevas descargas de fuentes. La firma visual es la tesis tipográfica y el retrato existente en un marco discreto; no hay ilustraciones o pantallas ficticias.
- Meowlab y Capictive comparten la primera fila; Print System ocupa la segunda. Connect2 se conserva como trabajo secundario. Las fichas no son falsos enlaces: tienen CTAs de código con destinos públicos reales.
- Nombre público **Print System**, consistente con el repositorio inspeccionado. La equivalencia con “AI Business Control System” queda pendiente de confirmación editorial.
- Estados de producto y roles no corroborados son opcionales y no se renderizan. No se transforma la existencia de código en una afirmación de lanzamiento o disponibilidad comercial.
- Música, GSAP, cursor propio, formulario externo y carrusel salen de la portada. El bot queda relegado a un enlace de footer. Se mantienen los JSON originales y componentes de detalle/formulario como material histórico sin publicarlos en la homepage.
- Se preservan los anchors útiles `inicio`, `proyectos`, `experiencia`, `sobre-mi`, `educacion`, `contacto`, `redes-sociales`; se incorpora navegación visible y salto al contenido.
- No había i18n que conservar. P0 entrega inglés funcional y mantiene la ruta española del bot; no se anuncian idiomas o rutas de traducción inexistentes.
- El dominio canonical usa `www`, coherente con la redirección observada desde el apex y el CV existente. Cambiar `site` solo corrige el HTML y los XML generados, sin tocar infraestructura.
- El sitemap manual de `public/` se elimina: la integración existente genera `sitemap-index.xml` y `sitemap-0.xml` para las rutas reales. Robots se genera desde `Astro.site`.
- Metadatos de homepage: title, description, canonical, Open Graph, Twitter card, JSON-LD Person y favicon con MIME correcto. El bot recibe título, descripción, idioma y canonical propios; se conserva la verificación de Search Console.
- Imagen social tipográfica real de 1200 × 630, con SVG fuente y PNG. Retrato y logos se importan como activos Astro para generar variantes WebP; originales conservados.
- Homepage funcional sin JS. Se mantiene únicamente el runtime de prefetch nativo de Astro (2231 bytes sin comprimir en esta build), procedente de la configuración existente. No se cargan React ni GSAP en esta ruta.
- Transiciones nativas de documento de 160 ms compatibles con el layout anterior y desactivadas con movimiento reducido. No se oculta contenido durante el scroll.

## Fuentes y contraste del contenido

Se inspeccionó código y documentación de repositorios públicos, en modo lectura. Las revisiones siguientes fijan el contexto de esta auditoría; no se ejecutó código remoto ni se usaron secretos o credenciales.

| Proyecto | Revisión inspeccionada | Evidencia usada y límites |
| --- | --- | --- |
| Meowlab | [d7f1854](https://github.com/DiogoFabricioAG/meowlab/tree/d7f1854fe6f4754a8511390016e1869806819275) | `package.json`; `apps/manolo-whatsapp-worker/package.json`, README y `src/index.ts`; árbol con `src/roles/registry.ts` y `src/node/server.ts`. Astro, TypeScript, Node, webhook WhatsApp, enrutamiento de roles, transcripción y almacenamiento por tenant. No prueba el estado comercial ni la arquitectura Next.js/FastAPI/Convex propuesta en el brief. |
| Capictive | [c328045](https://github.com/DiogoFabricioAG/Capictive-Web/tree/c3280453829e35e181c02aba43676f2703595bea) | `package.json`, `components/hero-section.tsx`, `features-section.tsx`, `app/page.tsx`, `app/api/chat/route.ts`. Next.js/React/TypeScript/AI SDK y endpoint conversacional de análisis político. Los textos de marketing sobre RAG no se toman como prueba de un pipeline implementado. No se publica “Founder”, 10 000 usuarios ni integraciones no comprobadas. |
| Print System | [7685829](https://github.com/DiogoFabricioAG/print-system/tree/76858295f27d684a487aeb81fc1669e88d7d4bd0) | `frontend/package.json`, `frontend/BACKEND.MD`, `ChatBotView.tsx`, `functions/package.json`, `functions/src/index.ts`, `functions/src/db/schema.ts`. Astro/React, Hono/Workers/D1 y UI de chat con tablas/gráficos. El README aún describe Google Sheets y arquitectura propuesta; se prioriza código sobre ese texto desactualizado. No se afirma LangChain, proveedor concreto de modelos ni autorización de operaciones financieras del servicio externo. |
| Connect2 | [5d1056c](https://github.com/DiogoFabricioAG/connect2/tree/5d1056cd0741f7b3c7dfcbb5afedaa970262e6e1) | `Frontend/package.json` y árbol de funciones Supabase para perfiles, eventos, salas y preguntas. React/Supabase en esta versión. La ficha anterior menciona Flutter/Express/WebSockets; no se replica sin confirmar si corresponde a otra implementación. |

Fuentes locales:

- `public/Diogo CV.pdf`: identidad, correo público, perfiles, formación UNI en curso, intercambio UC, preparación AWS re/Start, experiencia Growth Rockstar y contribución en Capictive. No se modifica el archivo ni se replica el teléfono en la homepage.
- `src/data/experience.json`: fechas de Growth Rockstar y Peri Institute, tareas concretas, LEAD UNI y fechas de liderazgo comunitario. El título de Growth discrepa con el CV: se prefiere “Programming & Tools Intern” del CV y se registra la discrepancia.
- `src/data/education.json`: continuidad de la formación y activos existentes. Se omiten porcentajes de mejora de proyectos académicos.
- `src/data/projects.json`: inventario original y enlaces de código, contrastados con fuentes actuales. Sus métricas, roles y estados no se consideran automáticamente aprobados.

Verificación de enlaces:

- Repositorios públicos y perfil GitHub: API pública accesible, repositorios localizados sin autenticación.
- LinkedIn: mismo enlace exacto en el sitio anterior y CV. HEAD automatizado respondió 405; no se inventó un destino alternativo. Revisión manual recomendada.
- Capictive live: el entorno devolvió un fallo TLS. Se retiene la URL en el material histórico, pero no se ofrece como demo validada. Esto no establece que el producto esté caído para todos los visitantes.
- `diogoabregu.tech` redirigió a `www.diogoabregu.tech`; el host www respondió 200. No se cambiaron redirects.
- CV, anchors, rutas y activos locales se comprueban contra el build.

## Archivos modificados / añadidos

| Archivo | Cambio |
| --- | --- |
| `README.md` | Documentación real del proyecto, comandos, contenido y límites |
| `astro.config.mjs` | Dominio real para SEO/sitemap; resto del stack conservado |
| `package.json` | Comando `test` con runner nativo Node; sin cambios de dependencias |
| `src/pages/index.astro` | Composición P0, sin scripts de carousel/modales/GSAP |
| `src/pages/robots.txt.ts` | Robots estático generado |
| `src/layouts/PortfolioLayout.astro` | Nuevo shell de homepage y metadatos |
| `src/layouts/BaseLayout.astro` | Idioma y metadatos exclusivos de `/bot`, MIME de favicon |
| `src/components/Navbar.astro` | Navegación semántica, compacta y visible sin JS |
| `src/components/Projectsbox.astro` | Ficha accesible con datos tipados y enlaces opcionales |
| `src/sections/PresentationSection.astro` | Identidad, titular, CTAs y retrato existente optimizado |
| `src/sections/ProjectsSection.astro` | Tres proyectos visibles y Connect2 secundario |
| `src/sections/EngineeringFocusSection.astro` | Nuevo bloque de cuatro áreas con respaldo |
| `src/sections/ExperienceSection.astro` | Cronología compacta sin métricas |
| `src/sections/AboutMeSection.astro` | About y liderazgo comunitario separado de empleo |
| `src/sections/EducationSection.astro` | Grado en curso, intercambio y formación AWS |
| `src/sections/ContactSection.astro` | Contacto directo con correo/perfiles existentes |
| `src/sections/SocialMediaSection.astro` | Footer con año generado, CV y acceso discreto al bot |
| `src/data/portfolio.ts` | Fuente pública TypeScript con activos y contenido comprobado |
| `src/data/portfolio-verification.ts` | Registro editorial `TODO_VERIFY`, nunca importado por la web |
| `src/styles/portfolio.css` | Tokens, retícula, responsive, foco, movimiento reducido |
| `public/social-card.svg` / `.png` | Fuente y raster de imagen social |
| `public/sitemap-1.xml` | Eliminado el duplicado manual; lo sustituye el sitemap generado |
| `tests/portfolio.test.mjs` | Cuatro pruebas de regresión sobre el build estático |
| `docs/PORTFOLIO_P0_AUDIT.md` | Esta auditoría, resultados y pendientes |
| `docs/previews/homepage-desktop.png` / `homepage-mobile.png` | Capturas de revisión del build local |

Sin cambios a `package-lock.json`, JSON históricos, CV ni especificación aportada. No hay cambios a DNS, servicios, secretos, infraestructura ni despliegues.

## Validación

- **Baseline:** `npm run build` pasó con las dos rutas originales antes de editar.
- **Build P0:** `npm run build` pasó; dos páginas, robots y sitemap generados; 14 variantes WebP de imágenes reales.
- **Tests:** `npm test`, 4/4 pasan. Incluyen metadatos distintos por ruta, un solo h1 en la portada, tres proyectos, bloqueo de afirmaciones no verificadas, presupuesto de JS, destinos locales/fragments y PNG social.
- **Whitespace:** `git diff --check` sin errores. Git avisa de normalización LF/CRLF por la configuración local; no es un fallo del código.
- **Lint:** no existe configuración ni script de lint. No se afirma una validación de lint o typecheck que no se ejecutó.
- **Responsive Chromium:** 320 × 740, 375 × 812, 768 × 1024, 1024 × 900 y 1440 × 1000. Sin overflow horizontal ni elementos del contenido fuera del viewport. Tres proyectos visibles sin carrusel; CTA principal dentro del primer viewport en los cinco tamaños.
- **Imágenes:** comprobación después de desplazar cada imagen lazy al viewport y esperar su decodificación: cero imágenes rotas.
- **Accesibilidad automática:** axe-core, reglas WCAG 2 A/AA, 2.1 A/AA y 2.2 AA: cero infracciones detectadas en los cinco tamaños. Esto no sustituye una auditoría manual completa ni pruebas con lector de pantalla.
- **Teclado / navegación:** skip link enfocado y visible, Enter mueve foco a main, Work desplaza a una sección visible debajo del header, footer permite volver de `/bot/` a la homepage.
- **Movimiento reducido:** scroll automático sin animación al activar `prefers-reduced-motion: reduce`.
- **Zoom:** 200 % mediante CSS zoom en viewport 1440 px, sin overflow horizontal. No equivale a probar todas las combinaciones de zoom y navegador.
- **Sin JS:** en Chromium con JavaScript deshabilitado, proyectos y titular presentes, navegación a contacto funcional.
- **Consola / red:** cero errores JS y cero respuestas locales 4xx/5xx en la secuencia de navegación. La descarga de metadata del MP3 del bot se cancela al abandonar esa ruta (ERR_ABORTED esperado), sin afectar a la portada.
- **Bot:** carga de UI, existencia de formulario y enlace de regreso comprobados. No se probó una conversación real ni la calidad/disponibilidad de la API remota.
- Herramientas de QA de navegador instaladas en un directorio temporal externo al repositorio; no se añadieron Playwright, axe o Lighthouse a las dependencias del proyecto.

Capturas de la portada: [escritorio](previews/homepage-desktop.png) y [móvil](previews/homepage-mobile.png). También se revisaron capturas de página completa para las cinco anchuras, guardadas durante QA en el directorio temporal.

### Lighthouse local

Lighthouse 12.8.2, perfil móvil, Chromium headless, contra el build servido con `npm run preview` en `http://localhost:4322/`. Medición final: 2026-11-05 06:15:55 UTC. Se usó una versión de Lighthouse compatible con el Node instalado, fuera de las dependencias del proyecto.

| Categoría | Puntuación |
| --- | --- |
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

LCP 960 ms, CLS 0, TBT 0 ms; FCP y Speed Index redondeados a 1,0 s. Se corrigió el nombre accesible del monograma para incluir el texto visible “DA.”; la medición final pasa esa comprobación. Persisten sugerencias informativas sobre la hoja CSS que bloquea el primer render, no fallos funcionales ni de los tests.

Estas son mediciones de laboratorio sobre localhost con emulación móvil, **no** Core Web Vitals de campo ni garantía de resultados idénticos en hosting real. No se midió rendimiento de la API del bot.

Los informes completos y scripts usados en este entorno quedaron en `%TEMP%/diogo-portfolio-qa/` (`report.json`, `lighthouse-mobile.json`, `qa.cjs`, `lighthouse.cjs`). Las pruebas permanentes del repositorio se reproducen con `npm run build` seguido de `npm test`.

## TODO_VERIFY antes de publicar datos adicionales

El registro completo y los motivos viven en `src/data/portfolio-verification.ts`; no se serializa en HTML, JSON-LD ni JS de cliente.

1. Estado actual, fechas y contribución/rol personal por proyecto; arquitectura realmente desplegada de Meowlab y alcance de cada agente. La existencia de código no prueba producto lanzado.
2. Rol actual en Capictive, demo pública estable y analytics de cualquier cifra de alcance, con definición y periodo.
3. Nombre preferido de Print System / AI Business Control System; implementación y límites del backend conversacional externo, tool calling y autorizaciones. No declarar acciones financieras solo por tener chat.
4. Versión real de Connect2 (React/Supabase frente a Flutter/Express), premio y demo/capturas que respalden cualquier afirmación adicional.
5. Métricas históricas de proyectos, freelance, experiencia y trabajos académicos; todas retenidas como insumo, ninguna publicada en P0.
6. Cargo oficial en Growth Rockstar y fechas actuales de actividad freelance, si se desea añadir esta última al timeline.
7. Vigencia del CV y fecha prevista de graduación; no se publica diciembre de 2027 sin confirmación.
8. Credencial verificable de AWS Cloud Practitioner: hasta entonces solo AWS re/Start / preparación, sin badge de certificación.
9. Microsoft Student Ambassadors: membresía, nivel y fechas; no se publica ni se presenta como empleo.
10. RADAR: proyecto o módulo de Meowlab, alcance implementado y evidencia pública; omitido hasta aclararlo.
11. Revisión manual de LinkedIn y elección de capturas/diagramas auténticos para casos de estudio.

## Próximos pasos por impacto

1. Resolver el registro editorial, empezando por roles/estados, CV y enlaces de demo.
2. Crear dos casos de estudio con capturas reales, contribución personal y decisiones de arquitectura comprobables.
3. Incorporar EN/ES como localización real, sin mezclar idiomas en una misma página.
4. Auditar el bot como una experiencia independiente: dependencia de API remota, contenido, accesibilidad y reproductor.

No se realizó deploy.
