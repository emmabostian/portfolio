import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Work = ({ data }) => (
  <Layout>
    <h1>Work</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <Link to={post.node.frontmatter.path}>
        <div>
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.frontmatter.date}</p>
        </div>
      </Link>
    ))}
  </Layout>
)

export const allBlogPosts = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`

export default Work
