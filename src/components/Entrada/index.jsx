import React, { useState } from 'react'
import { Input, TextArea } from '../Input'
import { Boton } from '../Button'
import { Select } from '../Select'

export const FormEntrada = () => {
    return (
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto' label='Monto'/>
                <TextArea id='Descripcion' label='Descripcion:' />
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Aplicar" />
            </form>
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
