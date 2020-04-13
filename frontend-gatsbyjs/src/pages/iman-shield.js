import React from "react"
import {Link, graphql} from "gatsby"
import {css} from "@emotion/core"
import Layout from "../components/layout"

const IndexPage = ({data}) => (
    <Layout>
        <h1>Iman Shield</h1>
        <p css={css`font-style: italic;
                color: inherit;`}>
                    Post a question and have it answered by the community.</p>
        <table>
            {data.allStrapiQuestion.edges.map( document => (
                <tr key={document.node.strapiId}>
                    <td >
                        <p>
                            <Link css={css`
                                text-decoration: none;
                                color: inherit;
                            `
                            }
                            to={`/iman-shield/question/${document.node.strapiId}`}>{document.node.question}</Link>
                                </p>
                    </td>
                </tr>
                )
            )}
        </table>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query questionQuery{
    allStrapiQuestion {
      edges {
        node {
          question
          strapiId
          is_approved
        }
      }
    }
  }  
`