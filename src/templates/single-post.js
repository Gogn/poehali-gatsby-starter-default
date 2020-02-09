import React from "react"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Badge, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap"
import Img from "gatsby-image"

export const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={post.title}>
      <SEO title={post.title}/>
      <Row>
        <Col md='8'>
          <Card>
            <Img className='card-img-top' fluid={post.image.childImageSharp.fluid}/>
            <CardBody>
              <CardSubtitle>
                <span className='text-info'>{post.date}</span> by{" "}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
              {/*<ul className='modal-content'>*/}
              {/*  {post.tags.map(tag => (*/}
              {/*    <li key={tag}>*/}
              {/*      <Link to={"/tag/{tag}"}>*/}
              {/*        <Badge color='primary'>*/}
              {/*          {tag}*/}
              {/*        </Badge>*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </CardBody>
          </Card>
        </Col>
        <Col md='4'>
          <Sidebar/>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date(formatString: "DD-MM-YYYY")
        path
        title
        image{
          childImageSharp{
            fluid(maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost