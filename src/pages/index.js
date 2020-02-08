import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import { Row, Col } from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Home</h1>
    <Row>
      <Col md='8'>
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  path={node.frontmatter.path}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )
        }}/>
      </Col>
      <Col md='4'>
        <div style={{width: '100%', height: '100%', background: "green"}}></div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "DD-MM-YYYY")
            author
            path
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
