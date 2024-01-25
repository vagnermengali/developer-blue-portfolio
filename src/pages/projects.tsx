import Layout from "@/components/Other/Layout/Layout"
import Seo from "@/components/Other/Seo"
import Projects from "@/components/Templates/Projects/Projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo description="" title="Projetos"/>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage