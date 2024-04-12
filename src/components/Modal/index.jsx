import React, { children } from 'react'
import { FormEntrada, Salida } from '../Entrada'

export const Modal = ({title, children, setIsOpen}) => {
    return (
        <>
            <div id="modal" className="modal">
                <div className="modal-content">
                    <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar"/></a>
                    <h2 className='titulo'>{title}</h2>
                    {children}
            
                </div>
            </div>       
        
        </>
    )
}