import cv from '../assets/documents/CV_Emilio_Ciorraga.pdf'

export default function About() {
  return (
    <section className="about" id="sobre-mi" aria-labelledby="about-title">
      <h2 id="about-title">Sobre mí</h2>
      <div className="about__content">
        <p>
          Mi formación empezó en Sistemas Microinformáticos y Redes y continuó en
          Desarrollo de Aplicaciones Web. En VIEWNEXT pasé de las prácticas duales
          a incorporarme como desarrollador Full Stack en julio de 2025.
        </p>
        <p>
          Trabajo en frontend y backend, en aplicaciones del ámbito sanitario e
          integraciones entre sistemas. También desarrollo My Gifts, un proyecto
          personal con el que he llevado una aplicación móvil a Android e iOS.
        </p>
        <p>
          Quiero seguir creciendo como desarrollador Full Stack, aprender de otros
          profesionales y participar en las decisiones que dan forma a un producto.
        </p>
        <a className="about__cv" href={cv} download="CV_Emilio_Ciorraga.pdf">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
          </svg>
          Descargar CV
        </a>
      </div>
    </section>
  )
}
