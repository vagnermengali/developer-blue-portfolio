import Layout from "@/components/Other/Layout/Layout"
import Seo from "@/components/Other/Seo"
import Home from "@/components/Templates/Home/Home"

const HomePage = () => {
  return (
    <Layout>
      <Seo description="" title="Homepage"/>
      <Home />
    </Layout>
  )
}

export default HomePage