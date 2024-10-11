import React from 'react'

function Modal({children, openModal, closeModal}) {
  return (
    <div onClick={(e) => e.target.id === 'wrapper'  ? closeModal(false) : ""} id='wrapper'  className={`fixed z-50 inset-0 backdrop-blur flex items-center justify-center duration-500 ${openModal ? "scale-1" : "scale-0"}`}>
        <div className='w-[500px] bg-slate-800 rounded-lg p-2 shadow-lg'>
            {children}
        </div>
    </div>
  )
}

export default Modal
