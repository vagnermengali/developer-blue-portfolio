import Layout from "@/components/Other/Layout/Layout"
import Seo from "@/components/Other/Seo"
import Home from "@/components/Templates/Home/Home"

const HomePage = () => {
  return (
    <Layout>
      <Seo description="Descubra um ponto de partida dinâmico para explorar meu mundo de desenvolvimento de software, com insights sobre minhas habilidades, experiência e abordagem única para resolver desafios tecnológicos." title="Homepage"/>
      <Home />
    </Layout>
  )
}

export default HomePage