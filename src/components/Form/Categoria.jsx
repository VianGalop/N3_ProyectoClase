import React, { useState } from "react"
import { Boton } from "../Button"
import { Input, TextArea } from "../Input"
import { Select } from "../Select"
import { ListaLi } from "../entradas"
import { Modal } from "../Modal"


export const ListCategory = ({categorias}) =>{
    const [isOpenCatego, setIsOpenCatego] = useState(false)

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
            <ListaLi name="NuevaCategoria" setAccion={() => setIsOpenCatego(true)} />
      
    {
        isOpenCatego &&
        <Modal title="Nueva Categoria" setIsOpen={() => setIsOpenCatego(false)}>
            <FormNewCategory />
        </Modal>
    }
      </>
    )
}

export const FormNewCategory = ()=>{
    return(
        <>
            <form id="contactForm" onSubmit="handleSubmit">                
                <Input type='text' id='monto' name='monto' label='Presupuesto'/>            
                <TextArea id='Descripcion' label='Descripcion:'/>
                <Select opciones="Transporte"/>
                <Boton tipo="button" className="button" idBoton='addContactBtn' label="Crear" />
            </form>
        </>
    )
}
