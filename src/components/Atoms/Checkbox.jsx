import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ id, name, value, q, onSelect }) => (
  <div className='radio'>
    <input
      type='radio'
      className='check'
      id={id}
      name={name}
      value={value}
      onChange={onSelect} />
    <label htmlFor={id} className='radio-label'>{q}</label>
  </div>
)

export default Checkbox
