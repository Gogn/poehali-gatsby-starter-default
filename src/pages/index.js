import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Googlemap from "../components/Googlemap"

const IndexPage = () => (
  <Layout pageTitle='Home'>
    <SEO title="Home"/>
    <Googlemap/>
  </Layout>
)

export default IndexPage
