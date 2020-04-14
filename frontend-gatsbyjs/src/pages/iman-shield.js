import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Typo from "@material-ui/core/Typography"

const IndexPage = ({data}) => (
    <Layout>
        <Typo variant="h3">Iman Shield</Typo>
        <Typo style={{fontStyle:'italic'}}>Post a question and have it answered by the community.</Typo>
        <table>
            {data.allStrapiQuestion.edges.map( document => (
                <tr key={document.node.strapiId}>
                    <td >
                        <p>
                            <Link                         
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