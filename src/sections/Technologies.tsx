import reactLogo from '../assets/technologies/react.svg'
import typescriptLogo from '../assets/technologies/typescript.svg'
import javascriptLogo from '../assets/technologies/javascript.svg'
import flutterLogo from '../assets/technologies/flutter.svg'
import javaLogo from '../assets/technologies/java.svg'
import springLogo from '../assets/technologies/spring.svg'
import postgresLogo from '../assets/technologies/postgresql.svg'
import mongoLogo from '../assets/technologies/mongodb.svg'
import firebaseLogo from '../assets/technologies/firebase.svg'
import junitLogo from '../assets/technologies/junit.svg'
import mockitoLogo from '../assets/technologies/mockito.ico'
import jiraLogo from '../assets/technologies/jira.svg'

const groups = [
  { name: 'Frontend y móvil', items: [
    { name: 'React', logo: reactLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Flutter', logo: flutterLogo },
  ] },
  { name: 'Backend', items: [
    { name: 'Java', logo: javaLogo },
    { name: 'Spring Boot', logo: springLogo },
  ] },
  { name: 'Datos y servicios', items: [
    { name: 'PostgreSQL', logo: postgresLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'Firebase', logo: firebaseLogo },
  ] },
  { name: 'Testing y herramientas', items: [
    { name: 'JUnit', logo: junitLogo },
    { name: 'Mockito', logo: mockitoLogo },
    { name: 'Jira Cloud', logo: jiraLogo },
  ] },
]

export default function Technologies() {
  return (
    <section className="technologies" id="tecnologias" aria-labelledby="technologies-title">
      <h2 id="technologies-title">Tecnologías</h2>
      <div className="technologies__groups">
        {groups.map((group) => (
          <div className="technologies__group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((technology) => (
                <li key={technology.name}>
                  <img src={technology.logo} alt="" width="24" height="24" loading="lazy" decoding="async" />
                  <span>{technology.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
