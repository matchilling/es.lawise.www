import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      color: "rgb(255,42,78)",
      textDecoration: "none"
    },
    "article a": {
      backgroundImage: `linear-gradient(180deg, transparent 70%, rgb(255,42,78, .4) 0)`,
      boxShadow: `none`,
      color: `hsla(0, 0%, 0%, 0.9)`,
      textDecoration: `none`
    },
    "article a:hover": {
      backgroundImage: `linear-gradient(180deg, transparent 70%, rgb(255,42,78, .8) 0)`,
      boxShadow: `none`,
      color: `hsla(0, 0%, 0%, 0.9)`,
      textDecoration: `none`
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`
    },
    "main > article > section > p:first-of-type": {
      color: `#b5b5b5`,
      fontSize: `140%`,
      fontFamily: `sans-serif`,
      fontWeight: `200`,
      lineHeight: `140%`
    }
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
