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
        <SEO title="Aviso Legal" />
        <h1 style={{ marginTop: `1.75rem` }}>Aviso Legal</h1>
        <h2>Datos identificativos</h2>
        <p style={styles}>
          El presente aviso legal recoge las condiciones generales que rigen el
          acceso y el uso de la presente página web (en adelante "la Página
          web"). El uso la Página web implica la expresa y plena aceptación de
          las presentes condiciones generales.
        </p>
        <p style={styles}>
          La Página web es de titularidad y está gestionada por Estefanía
          Asensio Vecchio (en adelante, "LAWISE"), domiciliada en Carrer de Sant
          Domènec, número 17, principal 1a, con CP 08012, Barcelona, con correo
          electrónico: contacto@lawise.es
        </p>
        <h2>Objeto y alcance</h2>
        <p style={styles}>
          El objeto de la Página web es proporcionar a los usuarios acceso a
          artículos, notas de actualidad, así como cualquier otra información
          que pudiera resultar de interés a los usuarios. El contenido o
          información transmitida en la presente Página web o por cualquier
          medio, es de carácter general y no constituye asesoramiento jurídico,
          ni puede sustituirlo.
        </p>
        <p style={styles}>
          La utilización de la Página web atribuye la condición de usuario del
          portal (en adelante, el "Usuario") e implica la aceptación de todas
          las condiciones incluidas en el Aviso Legal y Política de Cookies.
        </p>
        <p>
          El acceso a la Página web es gratuito salvo en lo relativo al coste de
          la conexión a través de la red de telecomunicaciones suministrada por
          el proveedor de acceso contratado por los usuarios.
        </p>
        <h2>Propiedad intelectual e industrial</h2>
        <p style={styles}>
          La presente Página web y los contenidos que alberga se encuentran
          protegidos por la legislación vigente en materia de propiedad
          intelectual.
        </p>
        <p style={styles}>
          LAWISE es titular o licenciataria de todos los derechos de propiedad
          intelectual e industrial de la presente Página web, así como de los
          elementos contenidos en la misma (a título enunciativo, pero no
          limitativo, imágenes, audios, vídeos, software o textos; marcas o
          logotipos, signos distintivos, combinaciones de colores, estructura y
          diseño, programas de ordenador necesarios para su funcionamiento,
          acceso y uso, etc.). En adelante, el "Contenido".
        </p>
        <p style={styles}>
          Los Usuarios deberán abstenerse de reproducir, transformar, distribuir
          y comunicar públicamente, incluida su modalidad de puesta a
          disposición, la totalidad o parte de los Contenidos de esta Página
          web, con fines comerciales, en cualquier soporte y por cualquier medio
          técnico, sin la previa autorización de LAWISE.
        </p>
        <p style={styles}>
          Además, deberán abstenerse en todo caso de suprimir, alterar, eludir o
          manipular cualquier dispositivo de protección o sistemas de seguridad
          que puedan estar instalados en la Página web.
        </p>
        <h2>Enlaces de terceros</h2>
        <p style={styles}>
          Las presentes condiciones de uso del portal se refieren únicamente a
          la Página web y Contenidos de LAWISE, y no se aplica a enlaces o
          páginas web de terceros accesibles a través de la Página web.
        </p>
        <p style={styles}>
          LAWISE no conoce los contenidos y/o servicios de los sitios enlazados
          y, por tanto, no se hace responsable de los daños producidos por la
          ilicitud, calidad, desactualización, indisponibilidad, error de los
          contenidos y/o servicios de los sitios enlazados, ni por cualquier
          otro daño que no sea directamente imputable a LAWISE.
        </p>
        <h2>Uso incorrecto del portal</h2>
        <p>
          El Usuario se compromete a utilizar la Página web y su Contenido de
          conformidad con la Ley y el presente Aviso Legal, así como con las
          demás condiciones, reglamentos e instrucciones que en su caso pudieran
          ser de aplicación.
        </p>
        <p>
          Con carácter enunciativo y no limitativo, el Usuario deberá abstenerse
          de las siguientes actuaciones:
        </p>
        <ul>
          <li>
            Descompilar, desensamblar, realizar ingeniería inversa, otorgar
            licencias, arrendar, transferir o realizar reproducciones a la
            Página Web o sus Contenidos.
          </li>
          <li>
            Reproducir, copiar, distribuir, poner a disposición, comunicar
            públicamente, transformar o modificar los Contenidos salvo en los
            casos autorizados en la ley o expresamente consentidos por LAWISE o
            por quien ostente la titularidad de los derechos de explotación en
            su caso.
          </li>
          <li>
            Extraer y/o reutilizar la totalidad o una parte sustancial de los
            Contenidos integrantes de la Página web.
          </li>
          <li>
            Transmitir un virus u otro componente dañino que perjudique, limite
            o dañe la Página web o interfiera en su uso.
          </li>
        </ul>
        <h2>Exclusión de responsabilidad</h2>
        <p style={styles}>
          Los contenidos de esta página son de carácter general y no
          constituyen, en modo alguno, la prestación de un servicio de
          asesoramiento de ningún tipo, por lo que dicha información resulta
          insuficiente para la toma de decisiones personales o empresariales por
          parte del Usuario.
        </p>
        <h2>Política de Cookies</h2>
        <p style={styles}>
          Puede consultar nuestra <a href={"/cookies/"}>Política de Cookies</a>{" "}
          para obtener mayor información acerca de las cookies que utiliza esta
          Página web.
        </p>
        <h2>Modificaciones y actualizaciones</h2>
        <p style={styles}>
          LAWISE se reserva el derecho de efectuar sin previo aviso las
          modificaciones que considere oportunas en su web, pudiendo cambiar,
          suprimir o añadir los contenidos, así como como la forma en la que
          éstos aparezcan presentados.
        </p>
        <p style={styles}>
          Por otro lado, las presentes condiciones generales podrán cambiar en
          cualquier momento. Las modificaciones entrarán en vigor desde el
          momento de su publicación.
        </p>
        <h2>Legislación aplicable y competencia</h2>
        <p style={styles}>
          El presente Aviso Legal se rige en todos y cada uno de sus extremos
          por la ley española siempre y cuando la Ley aplicable permita la
          renuncia al fuero legal establecido, se designa como fuero para
          dirimir posibles disputas, a los Juzgados y Tribunales de la ciudad de
          Barcelona (España), renunciando expresamente el usuario a cualquier
          otro fuero que pudiera corresponder.
        </p>
        <p>Última actualización: 12 de mayo de 2020.</p>
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
