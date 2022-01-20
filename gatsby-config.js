const siteAddress = new URL("https://gehhilfe.dev")

module.exports = {
  siteMetadata: {
    title: `Gehhilfe Dev-Log`,
    siteUrl: siteAddress.toString(),
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro`
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "dev-log-gehhilfe",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gehhilfe DevLog`,
        short_name: `Geh-DevLog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#212529`,
        display: `standalone`,
        icon: "src/images/favicon-1024.png"
      },
    },
    `gatsby-plugin-offline`
  ]
}