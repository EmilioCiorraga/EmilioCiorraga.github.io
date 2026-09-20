import tasksImage from '../assets/mygifts/tasks.jpg'
import rewardsImage from '../assets/mygifts/rewards.jpg'
import appIcon from '../assets/mygifts/icon.jpg'

export default function Projects() {
  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <h2 id="projects-title">Proyectos</h2>
      <article className="project" aria-labelledby="mygifts-title">
        <div className="project__content">
          <p className="project__category">Proyecto personal · Android / iOS</p>
          <h3 id="mygifts-title">
            <img className="project__icon" src={appIcon} width="56" height="56" alt="" loading="lazy" decoding="async" />
            My Gifts
          </h3>
          <p className="project__tagline">Tareas y recompensas para el día a día en familia.</p>
          <p className="project__description">
            Aplicación móvil donde madres y padres asignan tareas a sus hijos y
            establecen regalos que se desbloquean al completar objetivos. Incluye
            rutinas y una mascota virtual que evoluciona con el progreso.
          </p>
          <div className="project__contribution">
            <h4>Mi aportación</h4>
            <p>
              Desarrollo de la aplicación con Flutter y Firebase: lógica de negocio,
              autenticación, base de datos y notificaciones. Publicación y mantenimiento
              de versiones para Android e iOS.
            </p>
            <p className="project__ai">Desarrollo con apoyo de IA para escribir código.</p>
          </div>
          <div className="project__links" aria-label="Descargar My Gifts">
            <a href="https://play.google.com/store/apps/details?id=com.mygifts">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 3.5v17a1 1 0 0 0 1.5.86l15-8.5a1 1 0 0 0 0-1.72l-15-8.5A1 1 0 0 0 4 3.5Z" />
                <path d="m4.5 3 12 12M4.5 21l12-12" />
              </svg>
              Google Play
            </a>
            <a href="https://apps.apple.com/es/app/my-gifts/id6799672514">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="4.5" />
                <path d="m10 6 3 5m1-5-6 10m-1 1.7-.6 1M14 12l4 7M5 15h8m3 0h3" />
              </svg>
              App Store
            </a>
          </div>
        </div>
        <div className="project__images">
          <figure>
            <a href={tasksImage} aria-label="Abrir imagen de tareas de My Gifts a tamaño completo">
              <img src={tasksImage} width="600" height="1299" loading="lazy" decoding="async"
                alt="Imagen promocional de My Gifts: pantalla de tareas con rutinas, tareas pendientes y revisión por parte de los padres." />
            </a>
            <figcaption>Tareas y rutinas</figcaption>
          </figure>
          <figure>
            <a href={rewardsImage} aria-label="Abrir imagen de recompensas de My Gifts a tamaño completo">
              <img src={rewardsImage} width="600" height="1299" loading="lazy" decoding="async"
                alt="Imagen promocional de My Gifts: regalos pendientes y completados, con el progreso hacia cada recompensa." />
            </a>
            <figcaption>Objetivos y recompensas</figcaption>
          </figure>
        </div>
      </article>
    </section>
  )
}
