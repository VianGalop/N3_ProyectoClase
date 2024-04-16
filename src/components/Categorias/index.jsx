import React, { useState } from 'react'
import { ListaLi } from "../entradas"
import './BotonesList.css'
import { Modal } from "../Modal"
import { FormEntrada, Salida } from "../Gastos"
import { FormNewCategory } from '../Form/Categoria'
/* import { ReporteS } from '../Reportes/Reportes' */
import { BotonesRep } from '../Reportes/tresbotones'


export const BotonesCategorias = ({ setIsOpen }) => {
    const [isOpenNewCategory, setIsOpenNewCategory] = useState(false)
    const [isOpenListado, setIsOpenRListado] = useState(false)
    return (        
        <div className='modal' >
            <div className='modal-content' >
                <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar" /></a>
                <ul>
                    <ListaLi name="Nueva Categoria" setAccion={() => setIsOpenNewCategory(true)} />
                    <ListaLi name="Lista Categorias" setAccion={() => setIsOpenRListado(true)} />
                    {
                        isOpenNewCategory &&
                        <ReporteS title="ReporteS" setIsOpen={() => setIsOpenRepS(false)} />
                    }
                    {
                        isOpenListado &&
                        <ReporteE title="ReporteE" setIsOpen={() => setIsOpenRepE(false)} />
                    }
                </ul>
            </div>
        </div>
    )
}