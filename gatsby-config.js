require('dotenv').config();

  module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-source-google-sheet`,
    options: {
    // For protected spreadsheets you can use two-legged OAuth as described here:
    // https://www.npmjs.com/package/google-spreadsheet#service-account-recommended-method
    creds: {
      client_email: process.env.GS_CLIENT_EMAIL,
       private_key: process.env.GS_PRIVATE_KEY
    },
    // This is the bit after "/d/" and before "/edit" in the URL of a
    // Google Sheets document. I.e.,
    // https://docs.google.com/spreadsheets/d/1ec1bO25bbEL4pdZjhlV3AppMtnO65D0ZI8fXy4z47Dw/edit#gid=0
    spreadsheetKey: `1AwTb93M0l6fH6J4mXOiA9AavAhNS71GRvInrnJI79mo`,
      rootName: "GoToEurope" // default is Sheet
  }
  }
  ],
}