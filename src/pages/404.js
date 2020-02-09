import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle='404: Не найдено'>
    <SEO title="404: Not found" />
    <p>Страница, к которой вы обращаетесь не существует, либо была перенесена.</p>
    <Link className='btn btn-primary text-uppercase' to={'/'}>На главную</Link>
  </Layout>
)

export default NotFoundPage
