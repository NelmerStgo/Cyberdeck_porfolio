# CYBERDECK PORTFOLIO: Neo-Militarismo | Cyberpunk 2077

> Una interfaz de **portafolio personal inmersiva** inspirada en el **Neo-Militarismo** y el estilo de la interfaz (UI/UX) de **Cyberpunk 2077**. Diseñado para ser una terminal de datos elegante, funcional y visualmente impactante, construido con **React**, **TypeScript** y **Vite**.

## Características Clave (Highlights)

El proyecto ofrece una experiencia de usuario única y altamente estilizada:

* **Estilo Cyberpunk 2077:** Diseño auténtico basado en la paleta de colores de Vladimir Vilimovsky (CD Projekt Red).
* **Interfaz Inmersiva:** Efectos visuales de baja fidelidad (low-fidelity) como **scanlines**, **partículas** y **ruido** (*noise*) para simular una pantalla CRT futurista.
* **Feedback Auditivo:** **Efectos de sonido** (SFX) para interacciones clave (hover, click, transiciones) que potencian la inmersión.
* **Animaciones Fluidas:** Transiciones suaves entre secciones gestionadas por **Framer Motion**.
* **Navegación Intuitiva:** Sistema de **navegación por pestañas** (*tabs*) superior con una arquitectura sin *scroll* vertical.
* **Totalmente Responsive:** Adaptable a dispositivos móviles y diferentes tamaños de pantalla.

---

## Stack Tecnológico

| Categoría | Tecnología | Propósito Clave |
| :--- | :--- | :--- |
| **Frontend** | React 18 + TypeScript | Lógica y tipado fuerte. |
| **Build Tool** | Vite | Servidor de desarrollo rápido y optimización de producción. |
| **Estilos** | CSS Modules | Estilizado modular para evitar conflictos y encapsular estilos. |
| **Animaciones** | Framer Motion | Animaciones de alto rendimiento. |
| **Tipografía** | **Orbitron** y **Share Tech Mono** | Consistencia estética con el tema sci-fi/militar. |

---

## Paleta de Colores | Neo-Militarismo Data-Terminal

La paleta se basa en contrastes intensos para simular una pantalla de terminal de datos (Cyberdeck).

| Color | Código HEX | Rol Principal | Inspiración Temática |
| :--- | :--- | :--- | :--- |
| **Rojo** | `#F75049` | Color de Acción/Primario | Origen militar, peligro, alertas. |
| **Cian** | `#5EF6FF` | Color de Acento/Interactivo | Enfriamiento, datos críticos, *hover* activo. |
| **Fondo** | `#0E0E17` | Fondo Principal | Azul oscuro profundo, espacio de terminal. |
| **Verde** | `#1DED83` | Acento Positivo | Misiones completadas, calidad positiva. |
| **Amarillo** | `#F0B537` | Acento Secundario | Alertas, misiones principales, monedas. |

---

## Secciones del Cyberdeck

El portafolio se organiza en pestañas (*tabs*):

1.  **PROYECTOS:** Muestra tus trabajos a través de una cuadrícula de tarjetas (`CyberCard`) con detalles sobre tecnologías utilizadas.
2.  **HABILIDADES:** Presenta tu *skillset* técnico, organizado de forma clara por categorías.
3.  **CONTACTO:** Un formulario de contacto y enlaces a tus redes sociales/perfiles profesionales.

---

## Estructura del Proyecto

La aplicación sigue una estructura organizada por características y responsabilidades:

```text
.
├── public/ 
│   ├── audio/              # SFX y audio ambiental (si aplica)
│   ├── avatar/             # Imágenes de perfil
│   ├── fonts/              # Archivos de fuentes
│   └── img/                # Iconos, logos y otras imágenes estáticas
└── src/
    ├── assets/             # Assets procesados/importados por Vite (audio, fuentes, img)
    ├── components/
    │   ├── Cyberdeck/      # Componentes principales de la Shell (Header, Tabs, UserInfo, Content)
    │   │   ├── Content/    # Contenido de las pestañas (Projects, Skills, Contact)
    │   │   ├── Tabs/       # Lógica del sistema de navegación
    │   │   └── UI/         # Componentes reutilizables de Interfaz (Button, Card, Layout)
    │   │       └── Layout/ # Componentes de efectos de fondo (Scanlines, Noise, Particles)
    ├── hooks/              # Lógica reutilizable (useSound, useGlitch)
    ├── styles/             # CSS globales (variables, fuentes, globals)
    ├── types/              # Definiciones de tipos de TypeScript
    └── App.tsx             # Componente raíz

```

## Instalación y Uso

Para ejecutar una copia local del proyecto:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/NelmerStgo/Cyberdeck_porfolio.git
    ```
2. **Una vez clonado, entrar en la carpeta:**
    ```bash
    cd cyberdeck-portfolio
    ```
3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Levantar servidor local:**
    ```bash
    npm run dev
    ```
---

## Screenshots

A continuación se presentan capturas de pantalla de las secciones principales de la interfaz.

<details>
  <summary><strong>🧿 Ver Interfaz del Cyberdeck</strong></summary>
  <br>
  <img src="src/assets/img/screenshots/cyberdeck_projects.webp" width="100%" alt="Pantalla de Proyectos">
  <br><br>
  <img src="src/assets/img/screenshots/cyberdeck_skills.webp" width="100%" alt="Pantalla de Habilidades">
  <br><br>
  <img src="src/assets/img/screenshots/cyberdeck_contact.webp" width="100%" alt="Pantalla de Contacto">
</details>

---

## Personalización

Se puede personalizar fácilmente el contenido y la estética:

* **Contenido:** Actualiza la información en los componentes de las secciones (`src/components/Cyberdeck/Content/`). Si usas datos *mock* para el perfil, actualiza el archivo de configuración correspondiente.
* **Estilos y Colores:** Modifica las variables CSS en `src/styles/variables.css` para cambiar la paleta principal. Los estilos específicos por componente se encuentran en sus respectivos archivos `*.module.css`.
* **Efectos:** Ajusta la intensidad de los efectos visuales (**ruido**, **scanlines**, **partículas**) en los componentes de `src/components/UI/Layout/`.
* **Sonido:** Los archivos de sonido están en `public/audio/` (o `src/assets/audio/`). La lógica de control se maneja en el *hook* `src/hooks/useSound.ts`.

---

## Próximas Características (Roadmap)

* Sistema de partículas interactivo.
* Implementación de **Breach Protocol** (mini-juego de *hacking*) como *easter egg*.
* Audio ambiental y más efectos de sonido (SFX).
* Internacionalización (i18n) para múltiples idiomas.
* Integración con APIs externas (ej: GitHub, blog).
* Panel administrativo para gestión de contenido.

---

## Proyecto en desarrollo

Este proyecto está en desarrollo, no es su version final, la información dentro del proyecto es ficticia (temporalmente).

**Nota:** Este proyecto es una recreación inspirada en el diseño y estética de Cyberpunk 2077 y está destinado únicamente para **fines educativos y de portafolio**.

<div align="center">
  <br>
  <img src="src/assets/img/screenshots/samurai-icon.png" width="80" alt="Samurai Logo">
</div>
