import viewnextLogo from '../assets/companies/viewnext.jpg'

const professionalProjects = [
  {
    id: 'plataforma-sanitaria',
    title: 'Plataforma sanitaria',
    context:
      'Participación en la modernización de un ecosistema de aplicaciones para gestión ' +
      'de usuarios, trazabilidad, mensajería y consulta de información clínica.',
    contributions: [
      'Migración de aplicaciones y pantallas completas de Angular a React, incluyendo componentes, formularios y wrappers personalizados.',
      'Desarrollo de nuevas funcionalidades full stack con React/TypeScript y Java/Spring Boot, desde la interfaz hasta las APIs y la lógica backend.',
      'Migración de usuarios y roles desde PostgreSQL hacia Keycloak mediante su API.',
      'Desarrollo de procesos programados en backend para automatizar el ciclo de vida de RuleApps almacenadas en MinIO/Amazon S3.',
    ],
    technologies: 'Java · Spring Boot · React · TypeScript · Angular · PostgreSQL · MongoDB · Keycloak · MinIO · Amazon S3',
  },
  {
    id: 'jira-remedy',
    title: 'Integración Jira Cloud — BMC Remedy',
    context: 'Desarrollo y mantenimiento de un servicio encargado de sincronizar y gestionar tickets entre ambas plataformas.',
    contributions: [
      'Desarrollo de evolutivos y resolución end-to-end de incidencias, investigando problemas mediante logs, código, configuración y pruebas en distintos entornos.',
      'Soporte técnico y funcional a usuarios de Jira ante problemas relacionados con tickets, APIs, configuración e integraciones.',
      'Administración de Jira Cloud y desarrollo de integraciones con otros servicios.',
      'Desarrollo de aplicaciones con Atlassian Forge y participación en un servicio para incorporar casos de uso basados en IA dentro de Jira.',
    ],
    technologies: 'Java · Spring Boot · Jira Cloud · BMC Remedy · Atlassian Forge · React · TypeScript · Kibana · Git · Jenkins',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experiencia" aria-labelledby="experience-title" tabIndex={-1}>
      <h2 id="experience-title">Experiencia</h2>

      <div className="experience__company">
        <header className="experience__company-heading">
          <h3>
            <img className="experience__company-logo" src={viewnextLogo} alt="" width="32" height="32" loading="lazy" decoding="async" />
            Viewnext
          </h3>
          <p>Full Stack Developer</p>
          <p className="experience__period">
            <time dateTime="2024-06">Jun 2024</time> — <time dateTime="2026-09">Sep 2026</time>
          </p>
        </header>

        <div className="experience__content">
          <p className="experience__intro">
            Me incorporé inicialmente mediante prácticas duales y posteriormente continué
            como desarrollador Full Stack, trabajando principalmente con Java, Spring Boot,
            React y TypeScript en aplicaciones empresariales.
          </p>
          <div className="experience__cases">
            {professionalProjects.map((project) => (
              <article className="experience__case" key={project.id} aria-labelledby={`${project.id}-title`}>
                <h4 id={`${project.id}-title`}>{project.title}</h4>
                <p className="experience__description">{project.context}</p>
                <h5 className="experience__contribution-title">Mi aportación</h5>
                <ul className="experience__responsibilities">
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
                <p className="experience__technologies" aria-label="Tecnologías relevantes">
                  {project.technologies}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
