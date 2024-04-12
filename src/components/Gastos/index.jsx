import React, { useState } from 'react'
import { Input, TextArea } from '../Input'
import { Boton } from '../Button'
import { Select } from '../Select'

export const FormEntrada = () => {
    const [isOpenListado, setIsOpenListado] = useState(false)
    return (
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto' label='Monto'/>
                <TextArea id='Descripcion' label='Descripcion:' />
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Aplicar" />
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Listado" />
            </form>
        {
                isOpenListado  &&
                <Modal title="Listado Categorias" setIsOpen={() => setIsOpenListado(false)}> 
                    <ListCategory/>
                </Modal>
        }
        </>
    )
}


export const Salida = ()=>{
    /* const [setCategory, setIsCategory] = useState(false) */
    return(
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto'label='Monto'/>
                <Select opciones="Transporte"/>
                <TextArea id='Descripcion' label='Descripcion:'/>
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Aplicar" />
            </form>
        
        </>
    )
}
