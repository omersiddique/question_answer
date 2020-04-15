import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Typo from "@material-ui/core/Typography"
import QuestionCard from "../components/question"

const IndexPage = ({data}) => (
    <Layout>
        <Typo variant="h3">Iman Shield</Typo>
        <Typo style={{fontStyle:'italic'}}>Post a question and have it answered by the community.</Typo>      
            {data.allStrapiQuestion.edges.map( document => (               
                    <QuestionCard question={document.node.question} categories={document.node.categories} update={document.node.updated_at} key={document.node.strapiId} />                  
                )
            )}
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
          updated_at(fromNow: true)
          categories{
            name
            id
          }
        }
      }
    }
  }  
`