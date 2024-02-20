import Layout from "@/components/Other/Layout/Layout"
import Seo from "@/components/Other/Seo"
import Projects from "@/components/Templates/Projects/Projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo description="Explore uma galeria de projetos inspiradores e inovadores. Cada projeto é uma demonstração do meu compromisso com a excelência técnica e a entrega de soluções sob medida para os clientes." title="Projetos"/>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage