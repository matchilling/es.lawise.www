module.exports = {
  siteMetadata: {
    title: `LAWISE`,
    authors: [
      {
        name: `Carlota Corredoira`,
        summary: `Abogada especializada en privacidad y derecho tecnológico, con más de cinco años de experiencia en el asesoramiento de compañías multinacionales y startups, asesorando en temas de robótica e inteligencia artificial, drones, eGaming, reconocimiento facial y mucho más. Entusiasta de las nuevas tecnologías y firmemente convencida del valor de la innovación como motor de mejora social.`,
        social: {
          twitter: ``
        }
      },
      {
        name: `Estefania Asensio`,
        summary: `Abogada especializada en propiedad intelectual y tecnologías disruptivas, con amplia experiencia asesorando a compañías nacionales e internacionales en la protección y defensa de marcas y derechos de imagen, así como en proyectos que implementan tecnologías tales como reconocimiento facial, mobility-as-a-service, inteligencia artificial, u otros.`,
        twitter: `estefaniavecc`,
        social: {
          twitter: `estefaniavecc`
        }
      }
    ],
    description: `En LAWISE compartimos artículos y notas de actualidad sobre temas legales relacionados con la inteligencia artificial, privacidad, propiedad intelectual, eGaming, Blockchain, LegalTech y otros asuntos de interés.`,
    siteUrl: `https://www.lawise.es`,
    social: {
      linkedIn: `lawise-tech`,
      twitter: `lawise_es`
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
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168165987-1"
      }
    }
  ]
}
