module.exports = {
  siteMetadata: {
    title: `LAWISE`,
    authors: [
      {
        name: `Carlota`,
        summary: `Lawyer in Intellectual Property, Information Technologies and Data Protection.`,
        social: {
          twitter: `estefaniavecc`
        }
      },
      {
        name: `Estefania`,
        summary: `Lawyer specialized in Intellectual Property and Digital Law. Focused in the protection and advocacy of my clients' intangible rights by providing strategic, innovative and efficient solutions.`,
        twitter: `estefaniavecc`,
        social: {
          twitter: `estefaniavecc`
        }
      }
    ],
    description: `News, articles and analysis on legal issues related to #AI, #Blockchain, #DataSecurity, #IP, #LegalTech and more ... ⚖️ 🤖 💥`,
    siteUrl: `https://www.lawise.es`,
    social: {
      linkedIn: `estefaniavecc`,
      twitter: `estefaniavecc`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LAWISE`,
        short_name: `LAWISE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/lawise-icon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
