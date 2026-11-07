# Restauración del contexto editorial

El propietario aclaró en la conversación que `PORTFOLIO_REDESIGN_CODEX.md` fue preparado para aportar contexto personal al desarrollo del portafolio, y que corresponde incorporarlo. El MD y el CV actualizado se aceptan como fuentes primarias aportadas por el propietario. No se exige que cada dato de su trayectoria o del producto completo esté repetido en un repositorio público.

La primera P0 aplicó un filtro demasiado restrictivo. Este cambio recupera la información sustantiva, conservando las decisiones posteriores: Archivo Técnico, apertura, música opt-in, eliminación del bloque repetido del perfil, Connect2 y bot retirados.

## Contenido recuperado

| Fuente | Incorporación pública |
| --- | --- |
| MD §§1 y 6 | Software Engineering + AI Systems, agentes, backend, integraciones, automatización y contexto de negocio peruano |
| MD §7.3 y CV actual | Meowlab / FacturaYa: agentes para MYPES, WhatsApp, cotizaciones, facturación, ventas/inventario, responsabilidades y coordinación. Estado «In development» |
| MD §7.3 | Notas de arquitectura en desarrollo: Next.js, FastAPI, Convex/PostgreSQL según módulo, VPS/Caddy; escenario Sales Cat ↔ Stock Cat. Presentados como diseño/dirección, junto al runtime público TypeScript/Astro |
| MD §7.4 y CV actual | Capictive: fundador y AI Solutions Engineer, enero–abril 2026, producto construido, 35 candidatos, aproximadamente 5.000 CV y 10.000 usuarios alcanzados |
| CV actual | Capictive: scraping/APIs, extracción con Gemini a JSON, Next.js/Cloudflare D1 y semifinalista Voces Credicorp 2025 |
| MD §7.5 | Nombre AI Business Control System, acceso conversacional a datos operacionales, integración de herramientas y límites de acceso. Print System se conserva como nombre del código/repositorio |
| MD §7.6 y CV actual | RADAR: información de SEACE, análisis de bases, restricciones, criterios y apoyo a cotizaciones con Python/FastAPI/LLMs |
| CV actual | CHIMLE: colaboración en prototipo académico con Gemini, tool calling y datos estructurados; trabajo publicado en LACCEI 2026 |
| CV actual | M+S Metodologías + Soluciones: Junior Consultant desde julio 2026, marketplace FastAPI/Mercado Pago, automatización/VPS y flujo de desarrollo multiagente |
| MD §8 y fuentes locales | Capictive y Growth Rockstar en experiencia; Peri Institute conservado; liderazgo LEAD UNI separado como comunidad |
| MD §8.2 y CV actual | UNI en curso y quinto superior; graduación esperada diciembre 2027 según el contexto del MD; intercambio UC y AWS re/Start |
| MD §8.3 y CV actual | AWS Certified Cloud Practitioner, septiembre 2026, como certificación distinta de la formación re/Start |
| MD §8.4 | Microsoft Student Ambassadors como miembro de una comunidad, sin atribuir empleo en Microsoft, nivel o fechas no proporcionados |
| CV actual | Idiomas: español nativo e inglés C1 / EF SET |

Las cifras de Capictive conservan la aproximación del CV actual: `~5,000` y `~10,000`, sin transformarlas en umbrales exactos o analytics auditados. Los periodos y cargos del CV actualizado tienen prioridad sobre versiones anteriores cuando difieren.

## Lo que sigue siendo opcional

Se publican los datos personales proporcionados. Permanecen vacíos únicamente campos concretos que no se aportaron: URL/identificador de la credencial AWS, fechas/nivel de Microsoft Student Ambassadors, DOI/enlace del trabajo CHIMLE y demos/repositorios de trabajos sin URL facilitada. No hay botones vacíos o destinos inventados.

El dominio real de Capictive volvió a fallar en las comprobaciones TLS/HTTP de este entorno. Se mantiene el enlace a su código público; esa limitación del enlace no bloquea el relato del producto, el rol o los datos aportados por el propietario.

Los ejemplos ilustrativos del MD, como una decisión hipotética sobre colas frente a peticiones bloqueantes, no se convierten en hechos implementados. Las notas de diseño de Meowlab son distintas de las referencias del runtime público; no se dibuja una arquitectura de producción ficticia.

## Presentación y archivos

- `src/data/portfolio.ts`: fuente pública ampliada, con roles, periodos, alcance, métricas, notas, experiencia, certificación y comunidad.
- `src/data/portfolio-verification.ts`: registra la confirmación del propietario y deja pendientes solo datos o enlaces realmente ausentes.
- `src/components/Projectsbox.astro`: metadatos, alcance, métricas, reconocimiento y notas de diseño dentro de las fichas.
- `src/sections/ProjectsSection.astro`: tres proyectos principales y bloque secundario RADAR/CHIMLE.
- `src/sections/PresentationSection.astro`: nombre compacto Business Control en el índice/carpeta; ficha con nombre completo AI Business Control System.
- `src/sections/AboutMeSection.astro` y `EducationSection.astro`: comunidad, idiomas, educación y certificación.
- `src/styles/portfolio.css`: maquetación responsive de los nuevos bloques.
- `tests/portfolio.test.mjs`: se retiran bloqueos por palabras como Founder/AWS/FastAPI; se comprueba que el contexto aportado aparezca y que las funciones retiradas sigan ausentes.
- `README.md`, imagen social y capturas: actualizadas al contexto actual.

El MD aportado y el PDF del CV no se modifican. No hay deploy ni cambios de infraestructura.

## Validación

`npm run build` y seis pruebas del build pasan. La suite cubre contexto editorial recuperado, metadatos, rutas/activos, ausencia de bot/Connect2 y audio opt-in. No existe un script de lint en el proyecto.

Chromium revisado en 320, 375, 768, 1024 y 1440 px: sin overflow con notas cerradas o abiertas y cero infracciones detectadas por axe en cada anchura. Se comprobó la presencia de las métricas, empresas, certificación y comunidades, el preview de Business Control, el contenido sin JavaScript y la separación de Microsoft/LEAD respecto a la experiencia laboral. Cero errores JS y cero respuestas locales 4xx/5xx durante la secuencia. La revisión y capturas se conservan en `%TEMP%/diogo-portfolio-qa/content-*` y las vistas actuales en `docs/previews/`.
