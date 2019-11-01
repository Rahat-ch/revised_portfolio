const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  siteMetadata: {
    title: "Rahat Chowdhury Portfolio",
    author: "Rahat Chowdhury",
    description: "A web development portfolio created with Gatsby.js",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "rahat-chowdhury-portfolio",
        short_name: "rahat_portfolio",
        start_url: "/",
        background_color: "#1E2225",
        theme_color: "#1E2225",
        display: "minimal-ui",
        icon: "src/images/portfoliologo.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },
  ],
}
