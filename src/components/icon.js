import React from "react"
import Source from "simple-icons"

const DEFAULT = {
  height: 24,
  width: 24,
}

const icon = ({
  height = DEFAULT.height,
  fill,
  width = DEFAULT.width,
  src,
}) => {
  return (
    <svg
      fill={fill}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      style={{
        fill,
      }}
      viewBox={`0 10 ${height} ${width / 2}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{src.title}</title>
      <path d={src.path} />
    </svg>
  )
}

export const LinkedIn = ({ height, fill = Source.hex, width }) =>
  icon({
    height,
    fill,
    width,
    src: Source.get("LinkedIn"),
  })

export const Twitter = ({ height, fill = Source.hex, width }) =>
  icon({
    height,
    fill,
    width,
    src: Source.get("Twitter"),
  })
