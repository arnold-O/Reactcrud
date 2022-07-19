import React from 'react'

export default function Alert({ msg, type }) {
  return (
  

        <div className={`all-${type}`}>{msg}</div>

  )
}
