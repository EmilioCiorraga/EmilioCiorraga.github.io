# Portfolio de Emilio Ciorraga Albalat

Portfolio con React, TypeScript y Vite. Incluye el Hero con composición a la
izquierda, Experiencia con las dos etapas en Viewnext, S.A. y My Gifts como proyecto
destacado. El resto de secciones se
implementará de forma incremental.

## Requisitos

- Node.js 24 LTS (versión fijada en `.node-version`).
- npm incluido con Node.

Con NVS, desde la carpeta del proyecto:

```powershell
nvs use
npm.cmd ci
npm.cmd run dev
```

`nvs use` selecciona la versión de este proyecto en la terminal actual.
No cambia la versión predeterminada de Node para otros proyectos.
La dirección local aparecerá en la terminal. Para detener el servidor: `Ctrl+C`.

## Comandos

| Comando | Función |
| --- | --- |
| `npm.cmd run dev` | Servidor de desarrollo |
| `npm.cmd run typecheck` | Comprobación de TypeScript en modo estricto |
| `npm.cmd run lint` | ESLint, incluidas reglas de hooks y Fast Refresh |
| `npm.cmd run build` | Comprobación de tipos y compilación en `dist/` |
| `npm.cmd run preview` | Servir localmente la compilación de `dist/` |

En otras plataformas puede utilizarse `npm` en lugar de `npm.cmd`.

## Estructura

- `src/main.tsx`: punto de entrada de React.
- `src/App.tsx`: composición de la página.
- `src/sections/Hero.tsx`: disponibilidad, nombre, rol y enlace a LinkedIn.
- `src/sections/Projects.tsx`: My Gifts, aportación personal, imágenes y enlaces a las tiendas.
- `src/assets/mygifts/`: imágenes promocionales de tareas y recompensas tomadas de la
  [ficha oficial de App Store](https://apps.apple.com/es/app/my-gifts/id6799672514).
- `src/sections/Experience.tsx`: trayectoria en VIEWNEXT, responsabilidades y tecnologías.
- `src/styles.css`: base visual y estilos del Hero, incluido movimiento reducido.
- `src/assets/fonts/`: Inter y JetBrains Mono alojadas localmente con sus licencias.

La flecha del Hero enlaza a Experiencia mediante un ancla nativa, accesible
con teclado y desplazamiento suave. Con movimiento reducido, el desplazamiento
es inmediato. Los enlaces a LinkedIn, Google Play y App Store incluyen iconos SVG.

El despliegue en GitHub Pages y GitHub Actions queda pendiente de autorización.
