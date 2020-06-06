import React from "react"
import { default as Base } from "react-cookie-consent"
import Tracking from "./tracking"

const CookieConsent = () => {
  return (
    <React.Fragment>
      <Base
        onAccept={Tracking.start}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        buttonText="Aceptar"
        cookieName="gatsby-gdpr-google-analytics"
        location="bottom"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          fontFamily: "sans-serif",
        }}
      >
        Utilizamos cookies propias y de terceros para mejorar la experiencia del
        usuario através de su navegación. Si continúa navegando, consideramos
        que acepta su uso. Puede cambiar la configuración u obtener más
        información consultando nuestra{" "}
        <a style={{ color: "white" }} href={"/cookies/"}>
          Política de cookies
        </a>
        .
      </Base>
    </React.Fragment>
  )
}

export default CookieConsent
