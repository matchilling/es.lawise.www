import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      textDecoration: "none",
    },
    "article a": {
      boxShadow: "0 1px 0 0 currentColor",
      color: `hsla(0, 0%, 0%, 0.9)`,
      textDecoration: `none`,
    },
    article: {
      fontSize: "110%",
      lineHeight: "2",
    },
    "article a:hover": {
      boxShadow: "0 1px 0 0 currentColor",
      color: `hsla(0, 0%, 0%, 0.9)`,
      textDecoration: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "article figure": {
      margin: "0 -3rem",
    },
    "article figcaption": {
      color: "rgba(0, 0, 0, 0.35)",
      fontFamily: "sans-serif",
      fontSize: "80%",
      textAlign: "center",
      fontStyle: "italic",
    },
    "article mark": {
      backgroundColor: `rgb(255,42,78, .2)`,
      color: `hsla(0, 0%, 0%, 0.9)`,
    },
    "main > article > section > p:first-of-type": {
      color: `#b5b5b5`,
      fontSize: `140%`,
      fontFamily: `sans-serif`,
      fontWeight: `200`,
      lineHeight: `140%`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
