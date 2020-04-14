import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ( { children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <div>
            <Link to={`/`}>
                <h3>
                   {data.site.siteMetadata.title}
                </h3>
            </Link>

            <Link
                to={`/about-pandas`} >
                About
            </Link>
            { children }
        </div>
    )
}