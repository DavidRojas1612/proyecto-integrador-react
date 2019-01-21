import React from 'react'

const Theme = ({
  match: {
    params: { id }
  }
}) => {
  console.log(id)
  return (
    <div>
      <h1>Hola desde aquí</h1>
    </div>
  )
}

export default Theme
