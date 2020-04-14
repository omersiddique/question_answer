/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hikmah Sessions`,
    description: `The only true wisdom is in knowing you know nothing. ― Socrates`,
    author: `Omer Siddique`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "question",
          "answer",
        ],
        queryLimit: 1000,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,    
  ],
}
