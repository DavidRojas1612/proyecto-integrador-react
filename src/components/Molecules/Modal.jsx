import React from 'react'
import './Modal.scss'
const Modal = ({ children, handleShowModal, title }) => (
  <div className='modal'>
    <div className='modal__container'>
      <div className='modal__container-header'>
        <h3 className='modal__title'>{title}</h3>
        <div className='modal__container-header__close' onClick={handleShowModal}>x</div>
      </div>
      <div className='modal__container-body'>
        {children}
      </div>
    </div>
  </div>
)

export default Modal
