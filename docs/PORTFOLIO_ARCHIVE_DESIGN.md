# Diogo Abregu — archivo técnico

> Contexto editorial actualizado: [restauración del MD y CV](PORTFOLIO_CONTENT_RESTORATION.md). Los datos personales aportados por el propietario se incorporan como fuente primaria; las restricciones editoriales de la primera P0 ya no ocultan roles, métricas, certificaciones o comunidad por falta de duplicación en código público.

Iteración visual del 2026-11-05 sobre la P0 existente. Dirección solicitada: **Archivo Técnico**, con presencia inmediata y una invitación clara a explorar el trabajo.

> Actualización posterior solicitada por el propietario: se retiraron el perfil repetido del hero, Connect2 y el bot completo. Se corrigió el recorte tipográfico y se incorporó música opt-in. La sección «Limpieza de contenido y soundtrack» detalla estos cambios; las referencias anteriores a conservar el bot corresponden a la fase previa.

## Dirección

El sujeto es Diogo como constructor de software y sistemas de IA. La página funciona como un archivo personal que se abre: primero la identidad, después el índice y, a continuación, los registros técnicos. Se combina el orden de un archivo con escala tipográfica editorial y materialidad de carpetas de papel.

La firma visual es el masthead **DIOGO ABREGU.** y la carpeta de portada. El resto acompaña esa idea mediante referencias de índice, anotaciones, esquemas pequeños y fichas que permiten acceder al código.

### Sistema visual

| Rol | Elección |
| --- | --- |
| Fondo | Petróleo `#102a2c` |
| Superficie | `#173335` |
| Texto mineral | `#e7ece2` |
| Secundario | `#aabbb5` |
| Separadores | `#3c5655` |
| Acento cobre | `#f1aa78` |
| Papel de portada | `#e2e7dc`, tinta `#173c3b` |
| Tipografía | Archivo variable, con ancho y peso distintos para nombre, titulares y texto |
| Anotaciones | IBM Plex Mono regular |
| Retícula | Contenedor de 1240 px; nombre a todo el ancho; portada dividida entre declaración e índice visual |

Las fuentes WOFF2 se sirven localmente, sin añadir paquetes de producción. Archivo ocupa 90 104 bytes e IBM Plex Mono 14 708 bytes. Licencias OFL completas conservadas en `public/fonts/`. Fuentes originales: [Archivo](https://github.com/google/fonts/tree/main/ofl/archivo) e [IBM Plex Mono](https://github.com/google/fonts/tree/main/ofl/ibmplexmono), distribuciones WOFF2 de Google Fonts sin modificar.

## Interacciones y contenido

- La portada muestra un archivo de proyecto que cambia al pasar por los enlaces del índice o enfocarlos con teclado. Cada carpeta abre el registro correspondiente mediante un enlace real.
- El preview y el control de apertura comparten un módulo compilado por Astro. Con el reproductor opt-in, el JavaScript ejecutable de la portada ocupa **5706 bytes** sin comprimir: 2231 de prefetch existente, 1344 del módulo de apertura, 1809 de música y 322 de inicialización temprana. No se añaden React, GSAP ni nuevas librerías al cliente de esta ruta.
- En móvil, el índice se presenta como filas y el nombre ocupa dos líneas. El gesto de carpeta se reserva para el espacio de escritorio; todos los registros y contenidos siguen disponibles en la página.
- Cada registro contiene contexto, implementación, un esquema breve y referencias desplegables al código. Son enlaces a revisiones inspeccionadas, no a ramas cambiantes.
- Las nueve referencias se contrastaron con los árboles de código guardados durante la auditoría. Se conservan las mismas revisiones documentadas en `PORTFOLIO_P0_AUDIT.md`.
- Los esquemas resumen partes comprobadas de la implementación: WhatsApp/enrutamiento/historial en Meowlab; interfaz/endpoint/respuesta de modelo en Capictive; frontend/API/D1 en Print System. Son resúmenes de lectura, no diagramas completos de despliegue.
- Se mantienen sin publicar métricas, estados, roles y credenciales pendientes. El registro `portfolio-verification.ts` conserva sus controles editoriales.
- La entrada despliega la portada como un expediente: pestaña inicial, línea cobre, máscaras de papel sobre el nombre y abanico de carpetas. El control completo termina a los 1150 ms; en visitas siguientes de la pestaña se usa una entrada breve de 350 ms. Los estados hover de carpeta conservan sus 180 ms.
- `prefers-reduced-motion` desactiva esas animaciones. Las transiciones nativas entre documentos se desactivaron en ambos layouts: podían emitir un rechazo intermitente al interrumpirse una navegación.
- La escala del nombre responde al contenedor con `cqw`, incluyendo zoom; se evita depender únicamente del ancho de la ventana para una tipografía de ese tamaño.
- La imagen social SVG y su raster PNG de 1200 × 630 usan la misma dirección visual y los proyectos reales del índice.

### Apertura del expediente

La primera entrada de la pestaña muestra una pestaña de archivo, traza la línea cobre, revela el nombre tras dos hojas y despliega las carpetas. El índice se asienta al final. La duración del control completo es 1150 ms; las siguientes visitas de esa pestaña usan 350 ms. `sessionStorage` conserva únicamente la marca funcional de haber visto la apertura.

`Replay opening`, junto a LinkedIn y CV, permite repetirla. Escape, Tab, un clic, scroll o gesto táctil terminan la secuencia y dejan la portada estable. Se conservan los enlaces y el scroll desde el primer instante. Una entrada directa a un anchor evita animar una portada fuera de la vista.

Con movimiento reducido no hay apertura ni botón de repetición. Sin JavaScript, el contenido se muestra directamente. Si el navegador impide usar sessionStorage, la página sigue funcionando y la apertura vuelve a mostrarse en una visita nueva. Las capas decorativas son ignoradas por lectores de pantalla y no interceptan eventos.

Verificación específica en Chromium: primera entrada completa, recarga breve, repetición, interrupción con Escape y scroll, cinco anchuras de 320 a 1440 px durante y después de la apertura, cero errores de consola, cero infracciones detectadas por axe, movimiento reducido, JavaScript desactivado y almacenamiento bloqueado. `npm run build` y las cuatro pruebas existentes pasan. Scripts, capturas de fases e informe: `%TEMP%/diogo-portfolio-qa/opening-*`.

## Archivos de esta iteración

### Limpieza de contenido y soundtrack

- Se elimina el bloque de foto/estudios del hero, porque repite la presentación.
- La ventana de animación deja de recortar al terminar. Un margen óptico de `.08em` protege el borde de los glifos durante el revelado. La última «o» de Diogo queda completa.
- Connect2 se retira del contenido TypeScript, del JSON anterior y de las fichas secundarias. Sus referencias en esta auditoría inicial son históricas.
- Se eliminan `src/pages/bot.astro`, `src/sections/BotSection.astro`, el layout exclusivo `BaseLayout.astro`, el icono y el enlace de footer. El build tiene una página; `/bot/` devuelve 404 y no aparece en el sitemap. No se modifica el servicio remoto ni infraestructura.
- `src/components/MusicPlayer.astro` y `src/data/music.ts` incorporan las nueve pistas del reproductor original. Se mantienen play/pausa, siguiente pista, selección directa y volumen inicial del 20% en un control compacto dentro del hero.
- El elemento audio tiene `preload="none"`, sin `src` ni autoplay inicial. El navegador no solicita un MP3 antes de pulsar Play. La playlist continúa con la pista siguiente cuando termina una reproducción iniciada por el usuario.
- El menú de ajustes funciona con teclado y se cierra con Escape. Sin JavaScript se ofrece un enlace directo a la primera pista. Los errores de reproducción tienen un mensaje visible.
- Se probó también un fallo HTTP simulado y recuperación al volver a pulsar Play, además del enlace de audio sin JavaScript.
- Se adaptan las pruebas al retiro intencional de la ruta y al audio opt-in. `npm test`: cinco pruebas pasan; los archivos locales de todas las pistas se comprueban. El presupuesto del runtime se amplía a 8 KB sin comprimir para incluir los controles de música.
- Chromium verificó reproducción real, pausa, cambio de pista manteniendo el estado, cambio de volumen, ausencia de solicitudes de audio al cargar, menú abierto/cerrado sin overflow en 320/375/768/1024/1440 px, cero errores JS y cero infracciones detectadas por axe. Informe local: `%TEMP%/diogo-portfolio-qa/music-report.json`.

| Archivo | Cambio |
| --- | --- |
| `src/styles/portfolio.css` | Nuevo sistema visual, tipografía, carpetas, fichas, responsive y estados de interacción |
| `src/sections/PresentationSection.astro` | Masthead, preview de carpetas, índice funcional y mejora progresiva |
| `src/components/Navbar.astro` | Marca personal compacta y navegación de archivo |
| `src/components/Projectsbox.astro` | Registros con esquemas y referencias de implementación desplegables |
| `src/sections/ProjectsSection.astro` | Índice de registros y trabajo secundario |
| `src/data/portfolio.ts` | Introducción breve, categorías, esquemas, revisiones y rutas de archivos comprobadas |
| `src/layouts/PortfolioLayout.astro` | Preload local de Archivo y color de navegador |
| `src/layouts/BaseLayout.astro` | Desactivar únicamente la transición entre documentos; bot conservado |
| `public/fonts/archivo-latin.woff2` | Fuente variable local |
| `public/fonts/ibm-plex-mono-latin.woff2` | Fuente mono local |
| `public/fonts/archivo-OFL.txt` | Licencia original |
| `public/fonts/ibm-plex-mono-OFL.txt` | Licencia original |
| `public/social-card.svg` / `social-card.png` | Nueva composición social |
| `docs/previews/homepage-desktop.png` / `homepage-mobile.png` | Capturas actualizadas |
| `README.md` | Documentación del diseño y tipografías actuales |
| `docs/PORTFOLIO_P0_AUDIT.md` | Nota que remite a esta iteración |
| `docs/PORTFOLIO_ARCHIVE_DESIGN.md` | Estas decisiones y validaciones |

No se modifica el gestor de paquetes, las dependencias, las rutas, el CV ni la infraestructura. No se realiza deploy.

## Validación

- `npm run build`: correcto, dos páginas, robots, sitemap y 12 variantes de imágenes optimizadas.
- `npm test`: **4/4** pruebas existentes pasan. No se modifica la suite por cambios puramente visuales.
- `git diff --check`: sin errores de whitespace; Git mantiene sus avisos locales de normalización LF/CRLF.
- No hay comando de lint configurado en el proyecto.
- Chromium: **320, 375, 768, 1024 y 1440 px**, sin overflow horizontal ni imágenes rotas. CTA principal dentro del primer viewport en los cinco tamaños.
- Detalles abiertos: nueve referencias de código visibles y sin overflow en las cinco anchuras.
- Zoom al 200 % mediante CSS zoom: sin overflow horizontal; también se comprueba la adaptación normal mediante los cinco viewports.
- Axe: cero infracciones detectadas para WCAG 2 A/AA, 2.1 A/AA y 2.2 AA en los cinco tamaños. No sustituye una auditoría con lector de pantalla.
- Puntero: las tres entradas cambian el archivo de portada y llevan a su registro correcto.
- Teclado: skip link, índice, preview y apertura/cierre de referencias comprobados. Foco visible.
- Con JavaScript desactivado: identidad, los tres registros, referencias nativas y enlaces ancla disponibles.
- Movimiento reducido: scroll sin animación y animaciones de entrada/carpeta desactivadas.
- Consola y recursos locales: cero errores JS y cero respuestas 4xx/5xx en la navegación final. El MP3 del bot se cancela al abandonar esa ruta, como una descarga de media interrumpida normal.
- Bot: interfaz y regreso a homepage comprobados. No se prueba el backend remoto ni se envían mensajes.

La medición Lighthouse móvil local con la apertura implementada, Lighthouse 12.8.2 y Chromium headless obtuvo **100 en Performance, Accessibility, Best Practices y SEO**, con LCP redondeado a 1,8 s, CLS 0 y TBT 0 ms. Medición del 2026-11-05 a las 18:55 UTC sobre `npm run preview`. Es un resultado de laboratorio en localhost, no una medición de tráfico real.

Los scripts e informes completos del entorno permanecen en `%TEMP%/diogo-portfolio-qa/`. Las capturas actuales se conservan en [escritorio](previews/homepage-desktop.png) y [móvil](previews/homepage-mobile.png).
