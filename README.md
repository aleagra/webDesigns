# Web Designs

Sitio web y portafolio interactivo de alto impacto visual, diseñado como carta de presentación y agencia digital para comercializar servicios profesionales de diseño y desarrollo web (páginas landing, sitios institucionales y plataformas e-commerce a medida).

## Demo

La aplicación se encuentra desplegada y disponible en: [https://web-designs1.vercel.app/](https://web-designs1.vercel.app/)

## Funcionalidades

- **Experiencia visual interactiva y animaciones de alto nivel:** Integración de animaciones tipográficas con SplitType y GSAP, scroll interactivo con ScrollTrigger y transiciones fluidas con Framer Motion.
- **Hero interactivo & Marquee infinito:** Cabecera con tipografía de gran formato, llamadas a la acción (*View Projects*, *Get in Touch*) y carrusel continuo (*infinite marquee*) con los iconos y tecnologías dominadas.
- **Galería de proyectos destacados (*Selected Works*):** Sección de trabajos insignia con efecto de tarjetas apilables (*stacking cards*) al hacer scroll, tags de tecnologías y métricas de impacto de cada proyecto.
- **Showcase de plataformas web (*Web Platforms*):** Listado interactivo con cursor dinámico y modal flotante con vista previa en miniatura al hacer hover sobre proyectos reales (CryptoWave, Eztranslate, SocialApp, Weatherme).
- **Sección de planes y precios (*Flexible Pricing*):** Planes de desarrollo web transparentes (*Single page*, *Premium page*, *Ecommerce*) con desglose detallado de características, badge de más popular y botones de contacto directo.
- **Navegación fluida y Menú animado:** Navbar responsivo con anclas a las distintas secciones, menú desplegable con animaciones y botón interactivo para volver al inicio (*Back to top*).
- **Diseño Ultra-Moderno & Dark Mode:** Estética moderna en modo oscuro (`#0c0c0c`), efectos de desenfoque e iluminación (*glow effects*), tipografía Poppins y diseño 100% responsivo adaptable a móviles, tablets y desktop.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Librería UI:** React 18
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion, GSAP (GreenSock) y SplitType
- **Iconos:** React Icons (Feather Icons, BoxIcons, DevIcons, Simple Icons, FontAwesome, Tabler Icons)
- **Despliegue:** Vercel

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/aleagra/webDesigns.git
cd webDesigns
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

4. Construir para producción:

```bash
npm run build
npm start
```

## Estructura de Carpetas

```text
webDesigns/
├── public/                    # Recursos estáticos, capturas y mockups de proyectos
│   ├── CryptoWave.webp
│   ├── Eztranslate.webp
│   ├── SocialApp.webp
│   ├── Weatherme.webp
│   └── work*.webp
├── src/
│   ├── app/
│   │   ├── favicon.ico        # Icono de la pestaña
│   │   ├── globals.css        # Estilos globales y utilidades personalizadas
│   │   ├── layout.tsx         # Configuración del documento, tipografía y metadatos SEO
│   │   └── page.tsx           # Página principal y carga dinámica de secciones
│   ├── components/
│   │   ├── footer/            # Pie de página, enlaces sociales y scroll to top
│   │   ├── homepage/          # Sección Hero con animaciones GSAP y SplitType
│   │   ├── marquee/           # Carrusel continuo infinito de tecnologías
│   │   ├── navbar/            # Barra de navegación y menú lateral animado
│   │   ├── pricing/           # Sección y tarjetas de planes de precios
│   │   ├── projects/          # Lista de proyectos con modal preview flotante
│   │   └── works/             # Proyectos destacados con efecto stacking cards
│   ├── types/
│   │   └── interface.ts       # Tipos e interfaces de TypeScript
│   └── utils/
│       └── data.ts            # Datos estáticos (proyectos, planes, navegación y skills)
├── next.config.js             # Configuración de Next.js
├── tailwind.config.ts         # Configuración del tema y plugins de Tailwind CSS
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias y scripts de ejecución
```

## Licencia

Este proyecto está bajo la Licencia MIT.
