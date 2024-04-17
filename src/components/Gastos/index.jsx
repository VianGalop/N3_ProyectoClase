import React, { useState } from 'react'
import { Input, TextArea } from '../Input'
import { Boton } from '../Button'
import { Select } from '../Select'
import { Modal } from '../Modal'
import { ListCategory } from '../Form/Categoria'

export const FormEntrada = ({monto, setMonto, setIsOpen,setIsOpenEnt}) => {
   /*  const [isOpenListado, setIsOpenListado] = useState(false) */
    const [data, setData] = useState({
        id:1,
        monto: 0,
        descripcion:"",
        fecha: new Date()
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        let suma = parseFloat(data.monto) + parseFloat(monto)

        setMonto(suma)
        console.log(suma);
        const entradas = JSON.parse(localStorage.getItem('entradas')) //trayendo el valor del local
        localStorage.setItem('entradas', JSON.stringify([...entradas, data]))
        localStorage.setItem('monto', suma)

        setIsOpen(()=> setIsOpenEnt(false))
       
       
    }

    const enviarMonto = (e) =>{
        setData({...data, monto: parseFloat(e.target.value)})
    }
    const enviarDesc = (event) =>{
        setData({...data, descripcion: event.target.value})
    }

    return (
        <>
            <form id="contactForm" onSubmit={handleSubmit}>
                <Input type='text' id='monto' name='monto' label='Monto' value ={data.monto} onChange={enviarMonto} disabled={false}/>
                <TextArea id='Descripcion' label='Descripcion:' onChange={enviarDesc}/>
                <Boton className="button" idBoton='addContactBtn'  label="Guardar" onClick={handleSubmit}/>
            </form>

       {/*  {
                isOpenListado  &&
                <Modal title="Listado Categorias" setIsOpen={() => setIsOpenListado(false)}> 
                    <ListCategory/>
                </Modal>
        } */}
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
