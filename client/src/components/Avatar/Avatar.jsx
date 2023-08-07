import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color, borderRadius, fontSize, cursor }) => {
  const style = {
    backgroundColor,
    padding: `${py} ${py}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign : "center",
    cursor: cursor || null,
    textDecoration: "none"
  }

  return (
    <div style={style}>
        { children }
    </div>
  )
}

export default Avatar