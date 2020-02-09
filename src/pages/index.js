import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout pageTitle='Home'>
    <SEO title="Home"/>

  </Layout>
)

export default IndexPage
