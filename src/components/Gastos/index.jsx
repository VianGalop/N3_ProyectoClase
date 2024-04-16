import React, { useState } from 'react'
import { Input, TextArea } from '../Input'
import { Boton } from '../Button'
import { Select } from '../Select'
import { Modal } from '../Modal'
import { ListCategory } from '../Form/Categoria'

export const FormEntrada = () => {
    const [isOpenListado, setIsOpenListado] = useState(false)
    return (
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Input type='text' id='monto' name='monto' label='Monto'/>
                <TextArea id='Descripcion' label='Descripcion:' />
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Guardar" />
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
                <Select opciones="Transporte"/>
                <Input type='text' id='monto' name='monto'label='Monto'/>                
                <TextArea id='Descripcion' label='Descripcion:'/>
                <Boton tipo="button" className="button" idBoton='addContactBtn'  label="Aplicar" />
            </form>
        
        </>
    )
}
