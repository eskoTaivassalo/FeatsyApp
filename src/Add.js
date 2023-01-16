import React from 'react'
import './Add.css';

export default function Modal({children, handleClose}) {
  return (
    <div className="add-backdrop">
        
    <div className="add">
    {children}  
    <button onClick={handleClose}>close</button>
    </div>
    </div>
  )
}