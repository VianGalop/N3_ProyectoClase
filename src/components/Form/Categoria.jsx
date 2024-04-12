import React from "react"
import { Boton } from "../Button"
import { Input, TextArea } from "../Input"
import { Select } from "../Select"

export const FormNewCategory = ()=>{
    return(
        <>
            <form id="contactForm" onSubmit="handleSubmit">
                <Select opciones="Transporte"/>
                <Input type='text' id='monto' name='monto' label='Designar Presupuesto'/>            
                <TextArea id='Descripcion' label='Descripcion:'/>
                <Boton tipo="button" className="button" idBoton='addContactBtn' label="Crear" />
            </form>
        </>
    )
}

export const ListCategory = () =>{
    return(
        <>
            <form id="contactForm" onSubmit="handleSubmit">
               <table className="listCategory">
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Monto</th>
                    </tr>
                    <tr>
                        <td>Almuerzo</td>
                        <td>Comida</td>
                        <td>200</td>
                    </tr>
               </table>
            </form>
        </>
    )
}