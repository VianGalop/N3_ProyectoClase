import React, { useState } from 'react'
import './tresbotones.css'
import { ListaLi } from '../../entradas'
import { Modal } from '../../Modal'
import { ReporteS, ReporteE, ReporteM } from '../Reportes'

export const BotonesRep = ({ setIsOpen }) => {
    const [isOpenRepS, setIsOpenRepS] = useState(false)
    const [isOpenRepE, setIsOpenRepE] = useState(false)
    const [isOpenRepM, setIsOpenRepM] = useState(false)
    return (
        <div className='modal' >
            <div className='modal-content' >
                <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar" /></a>
                <ul>
                    <ListaLi name="Reporte-S" setAccion={() => setIsOpenRepS(true)} />
                    <ListaLi name="Reporte-E" setAccion={() => setIsOpenRepE(true)} />
                    <ListaLi name="Reporte-M" setAccion={() => setIsOpenRepM(true)} />
                    {
                        isOpenRepS &&
                        <ReporteS title="ReporteS" setIsOpen={() => setIsOpenRepS(false)} />
                    }
                    {
                        isOpenRepE &&
                        <ReporteE title="ReporteE" setIsOpen={() => setIsOpenRepE(false)} />
                    }
                    {
                        isOpenRepM &&
                        <ReporteM title="ReporteM" setIsOpen={() => setIsOpenRepM(false)} />
                    }
                </ul>
            </div>
        </div>
    )
}
