import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const Blog = () => (
  <Layout pageTitle='Home'>
    <SEO title="Home"/>
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.fields.slug}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </div>
      )
    }}/>
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
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
