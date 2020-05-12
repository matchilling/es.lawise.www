import { rhythm } from "../utils/typography"
import React from "react"

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}
      >
        <h4>Disclaimer</h4>
        <p>
          Toda la información contenida en este sitio web o la transmitida por
          cualquier otro medio es de carácter general. No constituye
          asesoramiento jurídico, ni puede sustituirlo.
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
