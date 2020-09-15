import React from "react"


import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about"
      background="red"
      category="Misc"
      date="30 de Julho de 2020"
      timeToRead="5"
      title="Diga não ao medium: tenha sua propria plataforma"
      description="Algumas razões para você ter sua propria plataforma"
    />
  </Layout>
)

export default IndexPage
