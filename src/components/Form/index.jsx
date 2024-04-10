import React, { useState } from 'react'
import { Input, TextArea } from '../Input'
import { Boton } from '../Button'

export const Form = () => {
    return (
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto'label='Monto' onChange="setMonto" value="3000"/>
                <TextArea id='Descripcion' label='Descripcion:' value='Salario'/>
            </form>
        </>
    )
}

export const FormDos = ()=>{
    const [setCategory, setIsCategory] = useState(false)

    return(
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto'label='Monto' onChange="setMonto" value="3000" />
                <Boton tipo="button" className="button" idBoton='categorias' setAccion={() => setIsCategory(true)} label="Categorias" />
                <TextArea id='Descripcion' label='Descripcion:' value='Salario'/>
            </form>
        
        </>
    )
}