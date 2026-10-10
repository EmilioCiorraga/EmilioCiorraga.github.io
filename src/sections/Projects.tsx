import tasksImage from '../assets/mygifts/tasks.jpg'
import rewardsImage from '../assets/mygifts/rewards.jpg'
import appIcon from '../assets/mygifts/icon.jpg'
import transparenciaIcon from '../assets/transparencia-inversora/favicon.ico'
import type { ReactNode } from 'react'

type Project = {
  id: string
  name: string
  category: string
  icon?: string
  tagline: string
  description: string[]
  technologies: string
  aiNote?: string
  linksLabel: string
  links: { label: string; href: string; icon?: ReactNode }[]
  images?: {
    src: string
    width: number
    height: number
    alt: string
    label: string
    caption: string
  }[]
}

const projects: Project[] = [
  {
    id: 'mygifts',
    name: 'My Gifts',
    category: 'App personal',
    icon: appIcon,
    tagline: 'Tareas y recompensas para el día a día en familia.',
    description: [
      'Aplicación móvil donde madres y padres asignan tareas a sus hijos y ' +
      'establecen regalos que se desbloquean al completar objetivos. Incluye ' +
      'rutinas y una mascota virtual que evoluciona con el progreso.',
    ],
    technologies: 'Dart · Flutter · Firebase',
    aiNote: 'Desarrollo con apoyo de IA para escribir código.',
    linksLabel: 'Descargar My Gifts',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.mygifts',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 3.5v17a1 1 0 0 0 1.5.86l15-8.5a1 1 0 0 0 0-1.72l-15-8.5A1 1 0 0 0 4 3.5Z" />
            <path d="m4.5 3 12 12M4.5 21l12-12" />
          </svg>
        ),
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/es/app/my-gifts/id6799672514',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="4.5" />
            <path d="m10 6 3 5m1-5-6 10m-1 1.7-.6 1M14 12l4 7M5 15h8m3 0h3" />
          </svg>
        ),
      },
    ],
    images: [
      {
        src: tasksImage,
        width: 600,
        height: 1299,
        alt: 'Imagen promocional de My Gifts: pantalla de tareas con rutinas, tareas pendientes y revisión por parte de los padres.',
        label: 'Abrir imagen de tareas de My Gifts a tamaño completo',
        caption: 'Tareas y rutinas',
      },
      {
        src: rewardsImage,
        width: 600,
        height: 1299,
        alt: 'Imagen promocional de My Gifts: regalos pendientes y completados, con el progreso hacia cada recompensa.',
        label: 'Abrir imagen de recompensas de My Gifts a tamaño completo',
        caption: 'Objetivos y recompensas',
      },
    ],
  },
  {
    id: 'transparencia-inversora',
    name: 'Transparencia Inversora',
    category: 'Landing page',
    icon: transparenciaIcon,
    tagline: 'Rediseño y migración de WordPress a Astro.',
    description: [
      'Web para un cliente del sector de la inversión inmobiliaria. Presenta sus servicios, ' +
      'explica cómo selecciona y analiza las operaciones y facilita el contacto con la empresa.',
    ],
    technologies: 'Astro · CSS · JS · GitHub Actions',
    linksLabel: 'Enlaces de Transparencia Inversora',
    links: [
      {
        label: 'Visitar web',
        href: 'https://transparenciainversora.com/',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3h7v7m0-7L10 14" />
            <path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
          </svg>
        ),
      },
    ],
  },
]

export default function Projects() {
  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <h2 id="projects-title">Proyectos</h2>
      {projects.map((project) => (
        <article className={`project${project.images ? '' : ' project--text'}`} key={project.id} aria-labelledby={`${project.id}-title`}>
          <div className="project__content">
            <p className="project__category">{project.category}</p>
            <h3 id={`${project.id}-title`}>
              {project.icon && <img className="project__icon" src={project.icon} width="56" height="56" alt="" loading="lazy" decoding="async" />}
              {project.name}
            </h3>
            <p className="project__tagline">{project.tagline}</p>
            {project.description.map((paragraph) => (
              <p className="project__description" key={paragraph}>{paragraph}</p>
            ))}
            <p className="project__technologies" aria-label="Tecnologías utilizadas">{project.technologies}</p>
            {project.aiNote && <p className="project__ai">{project.aiNote}</p>}
            <div className="project__links" aria-label={project.linksLabel}>
              {project.links.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {project.images && (
            <div className="project__images">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <a href={image.src} aria-label={image.label}>
                    <img src={image.src} width={image.width} height={image.height} loading="lazy" decoding="async" alt={image.alt} />
                  </a>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  )
}
