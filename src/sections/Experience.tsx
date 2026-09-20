export default function Experience() {
  return (
    <section className="experience" id="experiencia" aria-labelledby="experience-title" tabIndex={-1}>
      <h2 id="experience-title">Experiencia</h2>

      <div className="experience__company">
        <header className="experience__company-heading">
          <h3>Viewnext</h3>
          <p>De las prácticas duales al equipo de desarrollo.</p>
        </header>

        <ol className="experience__timeline" aria-label="Etapas en Viewnext, de más reciente a más antigua">
          <li className="experience__stage experience__stage--current">
            <p className="experience__period">
              <time dateTime="2025-07">Jul 2025</time> — Actualidad
            </p>
            <h4>Desarrollador Full Stack</h4>
            <ul className="experience__responsibilities">
              <li>Desarrollo frontend y backend de aplicaciones del ámbito sanitario en arquitectura de microservicios.</li>
              <li>Integración entre Jira Cloud y BMC Remedy para sincronizar tickets entre ambos sistemas.</li>
              <li>Desarrollo de APIs REST y pruebas unitarias con JUnit y Mockito.</li>
            </ul>
            <p className="experience__technologies" aria-label="Tecnologías principales">
              Java · Spring Boot · React · TypeScript · PostgreSQL · MongoDB
            </p>
          </li>

          <li className="experience__stage">
            <p className="experience__period">
              <time dateTime="2024-06">Jun 2024</time> — <time dateTime="2025-05">May 2025</time>
            </p>
            <h4>Desarrollador en prácticas duales</h4>
            <p className="experience__description">
              Desarrollo backend con Java y Spring Boot, configuración de Jira Cloud
              y participación en el mantenimiento y la resolución de incidencias de aplicaciones.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
