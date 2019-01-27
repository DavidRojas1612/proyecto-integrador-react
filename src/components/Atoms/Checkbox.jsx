import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ id, name, value, q }) => (
  <>
    <input type='radio' className='check' id={id} name={name} value={value} />
    <label htmlFor={id}>{q}</label>
  </>
)

export default Checkbox
