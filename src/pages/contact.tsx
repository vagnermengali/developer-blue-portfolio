import Layout from "@/components/Other/Layout/Layout"
import Seo from "@/components/Other/Seo"
import Contact from "@/components/Templates/Contact/Contact"

const ContactPage = () => {
  return (
    <Layout>
      <Seo description="" title="Contato"/>
      <Contact />
    </Layout>
  )
}

export default ContactPage