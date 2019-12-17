import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Home = ({ data }) => (
  <Layout>
    <h1>Home</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
)

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "computer.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Home
