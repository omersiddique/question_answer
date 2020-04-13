import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout-2"


const QuestionTemplate = ( {data} ) => (
    <Layout>
        <h3>{data.strapiQuestion.question}</h3>
        <h6>{data.strapiQuestion.updated_at}</h6>
    </Layout>
)

export default QuestionTemplate

export const query = graphql`
    query singleQuestion($id: Int!) {
        strapiQuestion(strapiId: {eq: $id}) {
        question
        updated_at(fromNow: true)
        }
    }  
`