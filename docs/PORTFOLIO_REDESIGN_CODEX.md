# Rediseño de diogoabregu.tech — Especificación para Codex

> **Documento de implementación · v1.0 · 05 de noviembre de 2026**  
> **Propietario:** Diogo Abregu  
> **Sitio:** https://diogoabregu.tech  
> **Objetivo:** reposicionar el portafolio personal como una muestra seria, clara y técnicamente sólida de *Software Engineering + AI Engineering + AI Systems*, sin convertirlo en una landing comercial ni atribuir logros inexistentes.

---

## 0. Instrucción principal para Codex (leer primero)

**Actúa como un senior frontend engineer, diseñador de producto y editor técnico. Tu trabajo es actualizar el portafolio que existe en este repositorio, no construir un template genérico desde cero.**

1. Inspecciona el proyecto local antes de modificar archivos: framework, gestor de paquetes, rutas, componentes, estilos, traducciones, contenido, activos, pruebas, scripts y despliegue.
2. Genera un diagnóstico corto del estado actual y un plan de implementación por fases. Contrasta las afirmaciones de este documento con lo que realmente hay en el repositorio; este documento es la fuente de la **intención de producto**, no de la estructura real del código.
3. Implementa las mejoras de mayor valor: identidad profesional, jerarquía del contenido, proyectos, experiencia, diseño responsive y SEO.
4. Aprovecha el stack y las convenciones existentes. **No migres de framework ni añadas librerías importantes sin justificación**. Refactoriza solo donde mejore mantenibilidad.
5. Mantén funcionales las rutas, enlaces, internacionalización y características existentes que aporten valor. Si vas a retirar algo, deja constancia y evita enlaces rotos.
6. **No inventes** métricas, empleo, productos terminados, reseñas, capturas, credenciales o URLs. Cuando falte una prueba o dato, utiliza una marca `TODO_VERIFY` en la fuente de contenido y oculta el elemento de la interfaz pública hasta poder validarlo.
7. Haz cambios en el código, ejecuta las verificaciones disponibles y termina con una lista de cambios, pruebas y pendientes editoriales. No te limites a entregar un plan.
8. No despliegues a producción, no modifiques DNS, secretos ni configuración de infraestructura sin autorización explícita.

**Resultado deseado:** una web minimalista y memorable que permita a un reclutador entender en menos de 10 segundos quién es Diogo, qué tipo de sistemas construye y cuáles son sus mejores proyectos, y permita a un ingeniero explorar los detalles técnicos.

---

## 1. Contexto e intención estratégica

### 1.1. Perfil a representar

Diogo Abregu es estudiante de Ingeniería de Sistemas en la Universidad Nacional de Ingeniería (UNI), Perú, con experiencia construyendo aplicaciones y automatizaciones. Su enfoque de desarrollo profesional actual está en **ingeniería de software aplicada a sistemas de inteligencia artificial**: agentes, LLMs, integraciones, backend, arquitectura y automatización de procesos reales. Ha trabajado en productos propios y prototipos de negocio, además de participar en comunidades técnicas.

El posicionamiento debe equilibrar tres ideas:

- **Software engineering first:** no limitar la identidad a «prompt engineering» o consumo de APIs.
- **AI engineering with systems thinking:** destacar datos, herramientas, orquestación, permisos, infraestructura, evaluaciones y fiabilidad como partes del producto.
- **Builder with real-world context:** mostrar problemas concretos, decisiones técnicas, limitaciones y resultados cuando estén validados.

No presentar al usuario como ingeniero colegiado/titulado, ingeniero sénior, empleado de Microsoft o especialista certificado en productos para los cuales no exista sustento. Se puede usar «Software Engineer building AI systems» como **enfoque profesional**; la educación debe indicar con claridad que el grado universitario está en curso.

### 1.2. Públicos principales

1. **Reclutadores** de prácticas e ingeniería: quieren perfil, experiencia, tecnologías, impacto y CV rápido.
2. **Ingenieros y tech leads:** quieren comprender decisiones de arquitectura, restricciones, código, documentación y calidad de ejecución.
3. **Colaboradores y comunidades:** quieren saber en qué está trabajando y cómo contactarlo.

La web **no** tiene como misión principal captar clientes de servicios freelance ni vender Meowlab. Su primera función es ser un portafolio profesional personal.

### 1.3. Mensaje principal

**Tagline preferido:**

> Building intelligent systems for real-world problems.

**Descriptor profesional:**

> Software Engineer focused on AI systems, backend engineering, and automation.

**Elevator pitch:**

> I'm Diogo, a Systems Engineering student at Universidad Nacional de Ingeniería (Peru). I build software and AI-powered products, with a focus on agents, backend systems, integrations, and real-world business workflows.

La versión pública debe ser natural, específica y breve. Evitar «passionate developer», «revolutionizing the future», «AI visionary» y otras formulaciones vacías.

---

## 2. Límites del conocimiento y auditoría obligatoria

El sitio público no pudo inspeccionarse de forma fiable al preparar este documento. En la conversación previa se describieron secciones como Capictive, AI Business Control System y Connect2; **esos nombres deben verificarse directamente en el repositorio**. No asumir que la tecnología actual del sitio es Next.js, Astro, React o cualquier otra.

### 2.1. Checklist de auditoría del repositorio

Codex debe establecer:

- Framework y versiones, gestor de dependencias, comandos de build, lint y test.
- Estructura de rutas, navegación y enlaces ancla.
- Tokens de diseño, tipografías locales y componentes reutilizables.
- Idioma(s) actualmente soportados y estrategia de traducción.
- Datos que viven en arrays, componentes o archivos Markdown/MDX/JSON.
- Inventario de proyectos, imágenes, links y estadísticas actuales.
- Metadatos, sitemap, robots.txt, OG image, favicon, canonical y analytics existentes.
- Dependencias y funcionalidades especiales (animaciones, efectos, reproductor de audio, formularios).
- Responsividad, navegación por teclado, contrastes y `prefers-reduced-motion`.
- Links rotos, recursos 404, errores de consola y problemas de rendimiento.

### 2.2. Entregable de auditoría

Al iniciar, producir un resumen como:

```text
Framework: [detectado]
Comando dev/build/test: [detectado]
Rutas principales: [detectadas]
Idiomas: [detectados]
Componentes reutilizables: [detectados]
Contenido actual a conservar: [inventario]
Problemas prioritarios: [hasta 10]
Cambios propuestos: [resumen]
```

Si ya existe un diseño coherente, mejorarlo; no imponer una reescritura estética innecesaria.

---

## 3. Alcance del rediseño

### P0 — imprescindible para la primera versión

- Cambiar hero, metadatos e identidad profesional.
- Reorganizar navegación y homepage.
- Presentar 3 proyectos principales con jerarquía clara.
- Actualizar secciones Experience, Engineering Focus, Education & Community y Contact.
- Disponer de enlaces funcionales a proyectos, repositorios, LinkedIn, GitHub y CV **cuando se encuentren sus URLs reales**.
- Diseño coherente en escritorio y móvil, accesible, sin scroll horizontal.
- Eliminar o relegar elementos visuales que distraigan del contenido.
- Configurar SEO básico y validar build.

### P1 — segunda iteración recomendable

- Crear páginas de *case study* por proyecto, al menos para los dos más fuertes con datos verificables.
- Habilitar localización EN/ES si la arquitectura actual lo facilita.
- Añadir diagrama técnico real y capturas auténticas por proyecto.
- Añadir sección discreta de experimentos.
- Pruebas E2E y evaluación de Lighthouse.

### P2 — opcional, no bloquear la publicación

- Blog/notes de ingeniería si ya existe contenido real o intención de mantenerlo.
- Filtrado de proyectos por categoría, solo si hay al menos seis proyectos.
- Microanimaciones suaves.
- Analytics respetuosos de la privacidad, solo si aportan valor.

### Fuera de alcance

- CMS complejo, base de datos o backend nuevo para contenido estático.
- Chatbot de IA decorativo en el portafolio.
- Terminal interactiva falsa, contadores dinámicos inventados o animaciones pesadas.
- Formularios que requieran servicios externos sin credenciales disponibles.
- Replantear la infraestructura, comprar dominios, desplegar o cambiar DNS.

---

## 4. Arquitectura de información

### 4.1. Orden de homepage

1. **Header:** monograma o nombre corto, Work, Experience, About, Contact, acceso a idioma si corresponde.
2. **Hero:** nombre, especialidad, propuesta de valor y dos CTAs.
3. **Selected Work:** tres proyectos prioritarios y, opcionalmente, «More projects».
4. **Engineering Focus:** las áreas donde trabaja, con capacidades concretas.
5. **Experience:** cronología compacta, resultados probados.
6. **About / Education & Community:** UNI, certificación, comunidad y contexto personal profesional.
7. **Contact:** invitación breve, correo y perfiles.
8. **Footer:** identidad, enlaces y año actual generado automáticamente.

**Regla:** los proyectos deben aparecer antes que una nube de tecnologías; un lector debe ver trabajo tangible inmediatamente después de la presentación.

### 4.2. Navegación sugerida

Desktop:

```text
DA.                                       Work  Experience  About  Contact    [EN/ES]
```

Mobile: usar navegación compacta accesible, sin modales complejos, con foco visible y cierre por Escape cuando aplique.

### 4.3. Páginas/rutas

Conservar las rutas reales detectadas. Si el stack dispone de router y es sencillo crear páginas individuales:

```text
/                      Homepage
/work                  Todos los proyectos (opcional; no requerida en P0)
/work/meowlab          Caso de estudio (P1)
/work/capictive        Caso de estudio (P1)
/work/ai-business-control  Caso de estudio (P1, si existe material)
```

No romper rutas existentes ni inventar enlaces internos antes de crear sus páginas. Si el proyecto es una web estática de una sola página, las fichas pueden ser secciones/MDX según convenga.

---

## 5. Diseño visual

### 5.1. Dirección

**Estética:** minimalismo editorial, tecnología sin clichés, claridad, buenas proporciones y tipografía fuerte. Inspiración conceptual: portfolio de ingeniero de producto, no landing de agencia de marketing ni dashboard SaaS.

Características:

- Fondo neutro claro u oscuro; si ya existe modo oscuro, conservar preferencia del usuario.
- Evitar gradientes fluorescentes, brillos excesivos, partículas flotantes, glassmorphism pesado y animaciones de scroll que ocultan contenido.
- Mucho espacio en blanco y una retícula consistente.
- Imágenes reales de proyectos; si faltan, composiciones tipográficas limpias, no mockups ficticios.
- Un acento cromático discreto (azul técnico sugerido), nunca más de uno como protagonista.

### 5.2. Tokens iniciales sugeridos (adaptables a los existentes)

Estos valores son guía, **no** mandato de reescribir el CSS:

```css
/* Ejemplo base en modo oscuro */
--bg: #0b0d10;
--surface: #12161b;
--surface-elevated: #191e25;
--text: #f4f6f8;
--text-muted: #a6b0bd;
--border: #2c333d;
--accent: #7aa8ff;
--content-width: 1120px;
--radius-card: 16px;
--radius-control: 10px;
```

Si el sitio actual usa otro tema bien resuelto, mantenerlo y ajustar contraste/jerarquía.

### 5.3. Tipografía y espaciado

- 1 familia sans legible más una mono opcional para etiquetas técnicas.
- Hero: clamp responsive; título legible sin saltos absurdos.
- Texto normal: aproximadamente 16–18 px y line-height 1.5–1.7.
- Ancho de párrafo: ~60–75 caracteres cuando sea posible.
- Espaciado consistente por escala (8, 12, 16, 24, 32, 48, 64, 96).
- Bordes discretos en cards y estados hover/focus visibles.

### 5.4. Responsive

- 320–375 px: hero claro, botones apilables, cards en una columna.
- 768 px: retícula intermedia; revisar navegación y textos.
- 1024 px+: contenedor centrado y cards de dos columnas según contenido.
- No ocultar información importante por efectos de interacción disponibles solo con hover.
- No provocar layout shift por fuentes, imágenes o animaciones.

### 5.5. Interacciones

- Nav que hace scroll a secciones con `scroll-margin-top`.
- Links con estados hover, focus y active coherentes.
- Cards clicables solo si tienen destino real; si no existe, presentar como contenido informativo.
- Animaciones de 120–220 ms como máximo cuando aporten claridad.
- Respetar `prefers-reduced-motion`.
- **Audio/reproductor:** si existe, quitarlo de la portada o relegarlo a una opción explícita sin autoplay.

---

## 6. Contenido propuesto — listo para usar

> Idioma editorial primario: **inglés**, para oportunidades nacionales e internacionales. Si ya existe español, conservar EN/ES. Si no hay i18n, entregar primero inglés funcional antes que introducir una infraestructura extensa. Las versiones ES siguientes sirven como referencia de traducción.

### 6.1. Hero — EN (preferido)

**Eyebrow:** `Software Engineering · Artificial Intelligence`

**Name:** `Diogo Abregu`

**Headline:** `Building intelligent systems for real-world problems.`

**Description:**

> I'm a Systems Engineering student at Universidad Nacional de Ingeniería (Peru), focused on software engineering, AI agents, backend systems, and business automation. I enjoy turning complex workflows into useful, reliable products.

**Primary CTA:** `Explore my work` → sección de proyectos.

**Secondary CTA:** `GitHub` → URL real y validada.

**Tertiary links:** LinkedIn, Résumé/CV, contacto, solo si existen destinos reales.

**Optional availability line:** no mostrar `Open to work` o `Available for hire` sin validación explícita. Si se activa, debe ser configurable.

### 6.2. Hero — ES

**Eyebrow:** `Ingeniería de Software · Inteligencia Artificial`

**Headline:** `Construyo sistemas inteligentes para resolver problemas reales.`

**Description:**

> Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional de Ingeniería (Perú). Me enfoco en ingeniería de software, agentes de IA, sistemas backend y automatización de procesos. Me interesa convertir flujos de trabajo complejos en productos útiles y confiables.

**CTAs:** `Ver proyectos`, `GitHub`, `LinkedIn`, `CV` (condicionados a URLs verificadas).

### 6.3. Texto breve About — EN

> I work at the intersection of software engineering and applied AI. My interests include agentic workflows, tool integrations, backend architecture, and designing systems that remain understandable and reliable beyond the demo. Alongside academic work at UNI, I build and experiment with products for real operational needs, especially in the Peruvian business context.

Evitar afirmar que domina áreas que solo está estudiando. Mostrar su foco y proyectos de respaldo.

### 6.4. Engineering Focus — estructura

**AI & Agentic Systems**  
LLM integrations, tool calling, agent workflows, retrieval and evaluation concepts. Solo mencionar tecnologías específicas de producción si están usadas en proyectos reales.

**Backend & Integrations**  
Python, FastAPI, APIs, external systems, automation, background jobs and data pipelines, según evidencia del repositorio y proyectos.

**Cloud & Infrastructure**  
AWS fundamentals, VPS deployments, Linux, Docker, networking and service operation. Evitar afirmar experiencia avanzada en producción si no está sustentada.

**Product Engineering**  
Full-stack implementation, system design, interfaces, shipping, observability and iteration.

Mostrar pocos nombres de herramientas, en grupos coherentes. Ejemplos de tecnologías conocidas por contexto para **verificar** antes de publicar: Python, TypeScript, Next.js, Astro, Vue, FastAPI, PostgreSQL, Convex, GitHub, AWS, Docker, Caddy, Tailscale. No mostrar todas automáticamente.

---

## 7. Proyectos — modelo, copy y orden

### 7.1. Principio editorial

Cada proyecto debe responder de forma inmediata:

1. **Qué problema resuelve.**
2. **Qué construí / cuál fue mi rol real.**
3. **Cómo funciona técnicamente, a alto nivel.**
4. **Qué está terminado, qué está en desarrollo y qué es una idea.**
5. **Qué evidencia puedo abrir.**

Los proyectos no se presentan como productos lanzados si son prototipos. No mezclar arquitectura planificada con implementación real.

### 7.2. Orden en homepage

| Orden | Proyecto | Estado editorial inicial | Ubicación |
|---|---|---|---|
| 1 | **Meowlab** | `In development` hasta validar el estado real | Featured |
| 2 | **Capictive** | `Built / Shipped` si hay evidencia de lanzamiento | Featured |
| 3 | **AI Business Control System** | Validar nombre, alcance y disponibilidad en repo | Featured si la evidencia es fuerte |
| 4 | **RADAR / Public Procurement Monitoring** | `Prototype` o módulo Meowlab, evitar duplicación | Experiments o case study subordinado |
| 5 | **Connect2** | Validar relevancia y capturas | Other Projects |
| 6 | Hackathons y otros | Solo demos verificables | Experiments |

Codex debe ajustar el orden si la evidencia disponible indica que otro proyecto explica mejor las capacidades actuales.

### 7.3. Meowlab — propuesta de copy

**Title:** `Meowlab`  
**Subtitle:** `AI agents for small-business workflows`  
**Status:** `In development` (editable)  
**Tags sugeridos:** `AI Agents` · `WhatsApp` · `Backend` · `Automation`

**Summary EN:**

> Designing a platform of specialized AI agents to help small businesses manage operational workflows through WhatsApp and connected services.

**Highlights de producto (usar condicionales):**

- Gestión/automatización de procesos como facturación, ventas, stock y monitoreo de oportunidades comerciales.
- Interacciones con servicios externos y procesamiento de eventos.
- Diseño multiagente con responsabilidades explícitas y coordinación.
- Primer enfoque en MYPES peruanas.

**Arquitectura de referencia conocida por contexto — confirmar implementación:** frontend Next.js, backend FastAPI, canal WhatsApp, almacenamiento Convex/PostgreSQL dependiendo del módulo, VPS y Caddy. No listar componentes como finalizados solo porque existan en el diseño.

**Para case study:** incluir escenario `Sales Cat ↔ Stock Cat`, eventos del proceso, orquestación, límites de autorización, estado actual y próximos hitos. Cuando haya diagramas, representar solo componentes comprobados; diferenciar propuesto/implementado visualmente.

**CTA:** `View project` solo cuando exista página. `Live demo` únicamente si es pública, estable y apropiada. Si el código es privado, no crear enlace falso.

### 7.4. Capictive — propuesta de copy

**Title:** `Capictive`  
**Subtitle:** `Civic technology powered by data and AI`  
**Tags:** ajustar según implementación real (`NLP`, `Data`, `Web`, etc.).

**Summary EN:**

> A civic-tech product that makes complex public and electoral information easier to access and understand through software and data-driven experiences.

**Qué documentar:** problema, usuarios, rol específico del usuario, producto, extracción/transformación de datos, funciones de IA realmente implementadas, desafíos y lecciones.

**Métricas:** existe antecedente conversacional de una cifra de alcance superior a 10 000 usuarios; **NO publicarla sin verificar analytics o evidencia**. Tampoco reutilizar automáticamente «Founder» si el cargo actual o el alcance de participación cambió. Cifras verificadas deben llevar periodo y definición (`users`, `visits`, etc.).

### 7.5. AI Business Control System — propuesta de copy

**Title:** `AI Business Control System` (validar nombre real)  
**Subtitle:** `Conversational access to operational business data`.

**Summary EN:**

> An AI-assisted interface for exploring business information and triggering structured operations through controlled tool integrations.

**Evidencia a buscar:** tool calling, endpoints, consulta de datos, autorizaciones, validación, límites, despliegue serverless (si aplica), demo y repositorio. No afirmar que realiza acciones financieras si no están programadas.

**Foco narrativo:** seguridad y diseño de herramientas, no solo el chat.

### 7.6. RADAR — propuesta de copy

**Title:** `RADAR — Procurement Opportunity Monitoring`  
**Subtitle:** `Monitoring and filtering public procurement opportunities in Peru`.

**Summary EN:**

> An exploration of automated monitoring workflows for public procurement information, from data collection to filtering and actionable alerts.

**Notas:** considerar integración o módulo de Meowlab; evitar listar dos proyectos casi idénticos si RADAR es una funcionalidad interna. Indicar estado real de scraping/ingesta, procesamiento, cola y alertas; no afirmar integración oficial ni acceso privilegiado a SEACE/OECE.

### 7.7. Connect2 y experimentos

Conservar como material secundario si muestran una habilidad diferente y tienen demostración/README suficiente. Si faltan screenshots, no inventar capturas; usar una card tipográfica con nombre, problema, stack y enlace real.

### 7.8. Plantilla obligatoria para cada proyecto

```ts
export type ProjectStatus = 'shipped' | 'in-development' | 'prototype' | 'archived';

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  role?: string;
  period?: string;
  tags: string[];
  cover?: string;        // asset local real
  coverAlt?: string;
  websiteUrl?: string;   // URL real, pública y válida
  repositoryUrl?: string;// URL real, pública y válida
  caseStudySlug?: string;// solo si existe la ruta
  highlights?: string[];
  metrics?: Array<{ label: string; value: string; source?: string }>;
};
```

El tipo es una sugerencia, no una imposición si el repositorio usa otra arquitectura. Centralizar el contenido y tiparlo cuando sea posible, evitando duplicación de copy y configuración dentro de componentes visuales.

---

## 8. Experience, Education y Community

### 8.1. Experience

Crear una cronología profesional compacta, priorizando **qué se construyó y el impacto verificable**, no descripciones extensas de empresa. El repositorio y CV actual son fuente primaria para cargos y fechas.

Contexto disponible que debe **confirmarse**:

- Capictive y actividad profesional alrededor de noviembre de 2025–abril de 2026, según registros previos.
- Experiencias con proyectos de automatización, software y otras organizaciones pueden existir en la web o CV.
- No mezclar empleo formal con proyectos propios, liderazgo voluntario ni participación en una comunidad.

Campos mínimos: empresa/proyecto, cargo real, periodo, hasta 2 bullets, stack solo cuando aporte valor. No rellenar vacíos con responsabilidades supuestas.

### 8.2. Education

- **Universidad Nacional de Ingeniería (UNI)** — Systems Engineering / Ingeniería de Sistemas — **en curso**.
- La fecha prevista de graduación usada previamente en CV fue diciembre de 2027: verificar vigencia antes de publicarla. Puede omitirse si no existe confirmación.
- Trabajos académicos no deben dominar la homepage. Un enlace a investigación o presentaciones solo si son públicos y relevantes.

### 8.3. Certifications

- **AWS Certified Cloud Practitioner** — aprobación en septiembre de 2026, según contexto personal. Agregar badge y enlace a credencial **solo cuando se disponga de URL o identificador verificable**.
- No presentar cursos de aprendizaje como certificaciones oficiales.

### 8.4. Community

- **Microsoft Student Ambassadors** — miembro/participante, con fechas y nivel confirmados. **Nunca etiquetar como empleo en Microsoft.**
- Participaciones en comunidades, hackathons y charlas: solo las que tengan evidencia y aporten al posicionamiento.

---

## 9. Guía de casos de estudio (P1)

Cada página detallada debe seguir esta estructura:

1. **Overview:** nombre, estado, periodo, rol, enlaces, stack comprobado.
2. **Problem:** necesidad real, tipo de usuario, por qué importaba.
3. **My contribution:** trabajo propio y colaboración cuando corresponda.
4. **Architecture:** diagrama auténtico y responsabilidades de los componentes.
5. **Key decisions:** 2–4 decisiones con tradeoffs concretos.
6. **Challenges:** dificultad técnica o de producto real, cómo se resolvió.
7. **Outcomes:** resultados probados o aprendizajes si aún no hay métricas.
8. **What's next:** backlog corto de trabajo pendiente, claramente separado de lo terminado.
9. **Related links:** demo, código, artículo y regreso a Work, si existen.

**No fabricar historias de ingeniería para completar secciones.** Si falta información, ocultar el bloque y dejar `TODO_VERIFY` en el contenido fuente.

### Formato de ejemplo de decisión técnica

```text
Decision: Why event-driven jobs instead of a blocking WhatsApp request?
Context: An external API may take time to respond.
Tradeoff: Added queue complexity in exchange for better response latency and retries.
Implementation status: [verify]
```

Este ejemplo es ilustrativo; no declarar que ya se implementó sin evidencia.

---

## 10. Accesibilidad, SEO y rendimiento

### 10.1. Accesibilidad (obligatorio)

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer` según corresponda.
- Solo un `h1` por página; niveles de encabezado coherentes.
- Navegable por teclado de principio a fin; foco claramente visible.
- Menú móvil con nombre accesible y estados correctos.
- Imágenes informativas con `alt`; decorativas con alt vacío.
- Contraste objetivo WCAG AA para texto y controles.
- No comunicar estados únicamente por color.
- Respetar reducción de movimiento y zoom al 200 %.
- Links externos con etiquetas útiles; no depender de iconos sin nombre.

### 10.2. SEO mínimo

- `<title>` y descripción únicos por ruta.
- Canonical de dominio real (revisar www/no-www y redirects).
- Open Graph y Twitter/X card con imagen real o composición generada desde el propio diseño, sin estadísticas inventadas.
- `robots.txt`, sitemap según framework, favicon, web manifest solo si ya corresponde.
- JSON-LD `Person` sencillo y exacto; no usar `Organization` para atribuir compañías equivocadas.
- Idiomas y `hreflang` solo si están implementadas las rutas o traducciones reales.
- Evitar contenido duplicado por rutas y metas inconsistentes.

**Propuesta de metadata EN:**

```text
Title: Diogo Abregu — Software Engineering & AI Systems
Description: Diogo Abregu builds software and AI-powered systems focused on agents, backend engineering, integrations, and real-world automation.
```

### 10.3. Rendimiento

- Optimizar imágenes; usar `width`/`height` o contenedores con ratio.
- Cargar diferido imágenes fuera del primer viewport.
- Evitar dependencias de animación grandes si CSS nativo basta.
- Tipografías con fallback y `font-display: swap` cuando aplique.
- No cargar reproductores, SDKs o scripts de terceros innecesarios.
- Objetivo orientativo Lighthouse móvil: Performance, Accessibility, Best Practices y SEO **>= 90**, con nota de excepciones documentadas por entorno.

---

## 11. Arquitectura de implementación: decisiones prudentes

### 11.1. No reescribir el stack

- Si es Astro, usar componentes y colecciones de contenido nativas cuando tenga sentido.
- Si es Next.js, respetar App Router/Pages Router existente y sus APIs nativas.
- Si es Vite/React u otro framework, mantener la organización prevalente.
- Evitar incorporar un state manager o CMS solo para almacenar contenido estático.

### 11.2. Organización sugerida, adaptable

```text
src/
  components/
    layout/
    sections/
    projects/
    ui/
  content/  (o data/ según el stack)
    profile.*
    projects.*
    experience.*
  styles/
    tokens.*
    global.*
  pages/    (según framework)
public/
  images/projects/
  resume/   (solo si existe PDF validado)
```

### 11.3. Modelo de contenido

- Datos separados de presentación.
- Estados de proyectos tipados y consistentes.
- Enlaces opcionales realmente opcionales: no renderizar botones vacíos.
- `TODO_VERIFY` no visible en producción ni en el DOM público.
- Textos traducidos centralizados si existe i18n.
- Buenas prácticas: TypeScript si ya está presente, componentes pequeños y estilos consistentes.

### 11.4. Integración y regresiones

- No borrar la versión actual sin revisar contenido valioso.
- Preservar analytics si están bien configurados y son legítimos; no añadir tracking por defecto.
- No introducir claves API en cliente.
- No romper rutas ni descargas de CV existentes.
- Verificar enlaces reales y gestionar 404 con comportamiento entendible.

---

## 12. Wireframe funcional

### Desktop (esquema)

```text
┌───────────────────────────────────────────────────────────────────────┐
│ DA.                            Work  Experience  About  Contact      │
├───────────────────────────────────────────────────────────────────────┤
│ SOFTWARE ENGINEERING · AI SYSTEMS                                     │
│                                                                       │
│ Diogo Abregu                                                          │
│ Building intelligent systems                                         │
│ for real-world problems.                                             │
│                                                                       │
│ [Short bio, 2-3 lines]                                                │
│ [Explore my work] [GitHub]  LinkedIn · Resume                        │
├───────────────────────────────────────────────────────────────────────┤
│ Selected Work                                          [View all]     │
│ ┌─────────────────────────────┐ ┌─────────────────────────────────┐   │
│ │ REAL IMAGE OR TYPE CARD     │ │ REAL IMAGE OR TYPE CARD         │   │
│ │ Meowlab                     │ │ Capictive                        │   │
│ │ AI agents / WhatsApp        │ │ Civic tech / data               │   │
│ └─────────────────────────────┘ └─────────────────────────────────┘   │
│ ┌─────────────────────────────────────────────────────────────────┐   │
│ │ AI Business Control System — integration / tool calling         │   │
│ └─────────────────────────────────────────────────────────────────┘   │
├───────────────────────────────────────────────────────────────────────┤
│ Engineering Focus  AI & Agents · Backend · Cloud · Product           │
├───────────────────────────────────────────────────────────────────────┤
│ Experience                  Education & Community                    │
├───────────────────────────────────────────────────────────────────────┤
│ Let's connect  [Email] [LinkedIn] [GitHub]                           │
└───────────────────────────────────────────────────────────────────────┘
```

### Mobile

- Header compacto; menú accesible o navegación resumida.
- Hero con una sola columna; ningún CTA sale de pantalla.
- Proyecto a proyecto en cards full-width.
- Skills en bloques pequeños, no en una nube de 30 badges.
- Experiencia en vertical sin fechas o columnas truncadas.
- Footer limpio, sin iconos diminutos.

---

## 13. Plan de ejecución para Codex

### Fase 0 — Auditoría y baseline

**Acciones:** detectar stack, leer README/configuración, ejecutar build, inventariar contenido, tomar capturas si el entorno lo permite.

**Salida:** resumen de hallazgos, lista de rutas, riesgos y archivos a modificar.

**Condición de paso:** se sabe cómo arranca y compila el proyecto antes de modificarlo.

### Fase 1 — Contenido y estructura

**Acciones:** extraer datos del perfil/proyectos, corregir hero, reordenar secciones, cambiar copy, revisar enlaces, estados y métricas.

**Salida:** homepage funcional con jerarquía profesional actualizada.

**Condición de paso:** un visitante entiende especialidad y proyectos sin leer toda la página.

### Fase 2 — Sistema visual y responsive

**Acciones:** normalizar tokens, componentes, espaciados, tipografía, cards, navegación y estados.

**Salida:** desktop y móvil consistentes; sin elementos sobrantes.

**Condición de paso:** no hay overflow ni botones inalcanzables en 320, 375, 768, 1024 y 1440 px.

### Fase 3 — Credibilidad y case studies

**Acciones:** añadir detalles técnicos auténticos de proyectos; primera página detallada si hay contenido verificado; reforzar educación, comunidad y certificaciones.

**Salida:** al menos dos proyectos explicables sin afirmaciones fabricadas; los restantes en cards honestas.

**Condición de paso:** estado, rol y enlaces son correctos.

### Fase 4 — QA y entrega

**Acciones:** build/lint/test, navegación teclado, metadatos, revisión de links, responsive y performance.

**Salida:** cambios implementados, notas de validación y pendientes.

**Condición de paso:** build exitosa; no quedan regresiones críticas.

---

## 14. Criterios de aceptación — checklist final

### Contenido

- [ ] El primer viewport incluye nombre, especialidad clara, propuesta de valor y CTA de proyectos.
- [ ] No domina la marca Capictive, Meowlab ni una identidad de agencia sobre el portafolio personal.
- [ ] Se muestran 3 proyectos principales ordenados por relevancia y evidencia.
- [ ] Todos los proyectos tienen problema, aporte, stack validado y estado real.
- [ ] La experiencia diferencia trabajo, emprendimiento, comunidad y formación.
- [ ] AWS Cloud Practitioner aparece solo con la atribución correcta; credential link si existe.
- [ ] Microsoft Student Ambassadors no aparece como empleo de Microsoft.
- [ ] No hay métricas inventadas, URLs de relleno o credenciales falsas.

### Diseño y UX

- [ ] UI moderna, minimalista, con tipografía legible y espaciado consistente.
- [ ] Navegación clara, acciones visibles y proyectos antes de skills extensas.
- [ ] Responsive en móvil pequeño, tablet, laptop y escritorio.
- [ ] Menú, botones y cards son utilizables por teclado y tacto.
- [ ] Sin autoplay, efectos pesados ni animaciones invasivas.

### Técnica

- [ ] Build, lint y tests disponibles pasan sin errores nuevos.
- [ ] Rutas antiguas importantes siguen funcionando o redirigen apropiadamente.
- [ ] No hay errores de consola ni recursos 404 introducidos por el cambio.
- [ ] `<title>`, description, Open Graph y canonical configurados correctamente.
- [ ] Contraste, encabezados, focus y `prefers-reduced-motion` revisados.
- [ ] Ningún secreto o token aparece en el código cliente.
- [ ] README actualizado con comandos y decisiones relevantes.

### Cierre

- [ ] Codex entrega resumen de archivos modificados y motivo de cada cambio.
- [ ] Codex enumera qué contenido falta confirmar para la publicación final.
- [ ] No se ejecuta despliegue a producción sin permiso.

---

## 15. Lista de verificación editorial — información aún no confirmada

Estas preguntas son para resolver **a partir del repositorio, CV actual o evidencia disponible**, no para bloquear el desarrollo. Si un dato no existe, conservarlo como pendiente privado y ocultarlo en la UI.

| Campo | Por qué importa | Acción |
|---|---|---|
| Links reales de GitHub, LinkedIn y CV | CTAs | Revisar versión actual del sitio/configuración |
| Estado actual de Meowlab | Credibilidad | Distinguir MVP, diseño y backlog |
| Estado/fechas/rol en Capictive | Exactitud | Contrastar README, CV y contenido existente |
| Métricas de Capictive | Impacto | Publicar solo con evidencia y periodo |
| Arquitectura real de AI Business Control | Contenido técnico | Revisar código o documentación |
| RADAR como proyecto o módulo | Evitar duplicidad | Revisar repositorio y producto |
| Fecha prevista de graduación | Educación | Mostrar solo si confirmada |
| URL verificable AWS CLF | Credencial | Vincular badge solo si existe |
| Nivel/fechas en Microsoft Student Ambassadors | Comunidad | Verificar identidad del programa |
| Capturas y diagramas | Calidad visual | Usar activos auténticos o fichas tipográficas |
| Correo público de contacto | Privacidad y UX | Recuperar del sitio/CV, no inventarlo |

---

## 16. Instrucciones editoriales de tono y calidad

- Escribir como un ingeniero que **construye**, no como vendedor de «soluciones disruptivas».
- Hacer concreto el valor de IA: *tool calling, systems integration, data ingestion, orchestration, failure handling* cuando haya evidencia.
- Evitar presentar el roadmap de aprendizaje como conocimiento experto adquirido.
- No sobrecargar el hero con 12 badges, tres párrafos y cuatro botones equivalentes.
- No confundir `Software Engineer`, `Systems Engineering student` y «ingeniero de sistemas graduado»; la combinación debe ser precisa.
- Priorizar párrafos breves, títulos descriptivos y buenos enlaces a trabajo real.
- Evitar publicación de información privada (teléfono, domicilio, credenciales, datos de clientes).

---

## 17. Formato de respuesta exigido a Codex

Cuando termines de implementar, responde con:

```text
1. Diagnóstico inicial
   - Stack, rutas y problemas principales encontrados.

2. Cambios implementados
   - Contenido: [...]
   - Diseño: [...]
   - SEO/accesibilidad: [...]
   - Archivos/rutas afectados: [...]

3. Validación
   - Comandos ejecutados y resultados.
   - Vistas responsive revisadas.
   - Problemas todavía conocidos.

4. TODO_VERIFY
   - Datos reales pendientes para publicar.
   - Enlaces/capturas que requieren aportar material.

5. Próximos pasos
   - Hasta cinco mejoras por impacto y esfuerzo.
```

**Prioridad absoluta:** implementar una primera versión funcional y pulida antes de dedicar tiempo a extras.

---

## 18. Prompt corto para iniciar Codex

Copiar y pegar en Codex después de colocar este archivo en la raíz del repositorio:

```text
Lee por completo PORTFOLIO_REDESIGN_CODEX.md y úsalo como especificación del rediseño de mi portafolio diogoabregu.tech.

Primero audita este repositorio para identificar stack, rutas, componentes y contenido actual. Después implementa directamente una primera versión P0 de la nueva homepage, respetando la arquitectura existente y preservando el contenido valioso.

Prioriza un diseño minimalista, buen responsive y una narrativa centrada en Software Engineering + AI Systems, con Meowlab, Capictive y los proyectos técnicos verificables. No inventes métricas, tecnologías, estados de productos ni enlaces: marca como TODO_VERIFY los datos no contrastados y no los publiques como hechos.

Ejecuta build/lint/tests según el proyecto. Si no puedes ejecutar algo, explica la limitación. Entrégame al final los archivos modificados, validaciones y datos que debo confirmar. No hagas deploy ni modifiques infraestructura.
```

---

**Fin de especificación.**
