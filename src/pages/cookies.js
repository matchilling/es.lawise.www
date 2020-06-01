import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = {
  fontSize: `110%`,
  fontWeight: `200`,
}

const DisclaimerPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={siteTitle}>
        <SEO title="Política de Cookies 🍪" />
        <h1 style={{ marginTop: `1.75rem` }}>Política de Cookies 🍪</h1>
        <h2>Datos identificativos</h2>
        <p style={styles}>
          La presente Política de Cookies tiene como objetivo informarle de
          manera clara y precisa acerca de las cookies que se utilizan en la
          Página web de LAWISE.
        </p>
        <h2>¿Qué son las cookies?</h2>
        <p style={styles}>
          Las Cookies son pequeños archivos de datos que se instalan en el
          navegador del Usuario y permiten obtener información relativa a su
          navegación, por ejemplo, idioma, lugar desde el que se accede,
          duración de la sesión, número de entradas, entre otra información, con
          le fin de facilitar el próximo acceso a la Página web.
        </p>
        <h2>Tipología de cookies y finalidades de uso</h2>
        <p style={styles}>
          La presente Página web utiliza Cookies de sesión y/o Cookies
          persistentes que, a su vez, pueden ser Cookies propias y/o de
          terceros.
        </p>
        <p style={styles}>
          Tipos de cookies según el plazo de tiempo en el que permanezcan
          activas:
        </p>
        <ul>
          <li>
            <b>Cookies de sesión:</b> están diseñadas para recabar y almacenar
            datos mientras el Usuario accede a la Página Web.
          </li>
          <li>
            <b>Cookies persistentes:</b> permiten recopilar los datos
            almacenados en el terminal y acceder y tratar durante un periodo
            definido por su responsable.
          </li>
        </ul>

        <p style={styles}>
          Tipos de cookies según la finalidad para la que se traten los datos
          obtenidos:
        </p>
        <ul>
          <li>
            <b>Cookies propias:</b> son aquellas que se envían al equipo
            terminal del Usuario desde un equipo o dominio gestionado por el
            propio editor.
          </li>
          <li>
            <b>Cookies de terceros:</b> son aquellas que se envían al equipo
            terminal del Usuario desde un equipo o dominio ajeno al del editor,
            esto es, LAWISE.
          </li>
          <li>
            <b>Cookies técnicas:</b> permiten al Usuario la navegación a través
            de la Página Web y el uso de las diferentes opciones o servicios que
            en ella existan como, por ejemplo, controlar el tráfico y la
            comunicación de datos, identificar la sesión, acceder a partes de
            acceso restringido, utilizar elementos de seguridad durante la
            navegación, almacenar contenidos.
          </li>
          <li>
            <b>Cookies de Personalización:</b> permiten al Usuario acceder al
            servicio con algunas características de carácter general
            predefinidas en función de una serie de criterios en el terminal del
            Usuario como, por ejemplo, recordar preferencias de reproducción de
            vídeos.
          </li>
        </ul>
        <p>
          A continuación, podrá ver la identificación de los terceros que
          utilizan cookies y mediante el enlace proporcionado podrá acceder a
          sus políticas al respecto:
        </p>
        <table>
          <thead>
            <tr>
              <td>Finalidad</td>
              <td>Tercero</td>
              <td>Para obtener más información</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Cookies de Análisis:</b> permiten al responsable el
                seguimiento y el análisis del comportamiento de los Usuarios de
                la web a los que están vinculadas. La información recogida
                mediante este tipo de cookies se utiliza en la medición de la
                actividad del sitio web y para la elaboración de perfiles de
                navegación de los Usuarios de dichos sitios, aplicaciones y
                plataformas, con el fin de introducir mejoras en función del
                análisis de los datos del uso que muestran los Usuarios del
                servicio.
              </td>
              <td>Google</td>
              <td>
                <a
                  href={
                    "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                  }
                >
                  Pulse aquí
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Desactivación o eliminación de las cookies</h2>
        <p style={styles}>
          La mayoría de navegadores web permite gestionar, en cualquier momento,
          las preferencias del Usuario sobre el uso de las Cookies. El Usuario
          puede ajustar su navegador para que rechace Cookies o elimine
          determinadas Cookies según su criterio.
        </p>
        <p style={styles}>
          Para la configuración de las Cookies el Usuario puede acceder a:
        </p>
        <ul>
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Internet Explorer</li>
          <li>Safari</li>
        </ul>
        <p style={styles}>
          El Usuario puede revocar su consentimiento para el uso de Cookies en
          su navegador a través de las indicaciones anteriores o a través de la
          instalación de un sistema de rechazo, (“opt-out”) en su navegador web.
        </p>
        <p style={styles}>
          En el caso de las Cookies de Google Analytics, el opt-out puede
          realizarse a través del siguiente enlace.
        </p>
        <p style={styles}>
          El Usuario debe tener en cuenta que algunas características de los
          contenidos de la Página web solo están disponibles si se permite la
          instalación de Cookies en su navegador. Si decide no aceptar o
          bloquear determinadas Cookies (en función de su finalidad), puede que
          esto afecte, total o parcialmente, al funcionamiento normal de la
          Página web o que impida el acceso a algunos servicios de la misma.
        </p>
        <h2>Actualizaciones de la Política de Cookies</h2>
        <p style={styles}>
          La presente Política de Cookies podrá ser modificada en función de
          nuevas exigencias legislativas, reglamentarias, o con la finalidad de
          adaptar dicha política a las instrucciones dictadas por la Agencia
          Española de Protección de Datos o en el supuesto que cambien las
          funciones y propósitos de uso de las cookies en la Página web.
        </p>
        <p style={styles}>Última actualización: 12 de mayo de 2020.</p>
      </Layout>
    </React.Fragment>
  )
}

export default DisclaimerPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
