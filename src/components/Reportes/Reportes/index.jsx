import React from 'react'
import { ContainerCheckbox } from '../componentesReportes/Checkboxes/Checkboxes/index1'
import { ContainerDate } from '../componentesReportes/LosDates'
import { TableMontoS, TableMontoE, TableMontoM } from '../componentesReportes/LosTable/Table'
import './Reportess.css'

export const ReporteS = ({ setIsOpen }) => {
    return (
        <div className="modal">
            <div className='modal-content' >
                <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar" /></a>
                <h1>Reporte-S</h1>
                <ContainerCheckbox />
                <h3>Rango de fecha</h3>
                <ContainerDate />
                <select id="categoria" name="categoria" aria-placeholder='categoria'>
                    <option value="transporte">transporte</option>
                    <option value="comida">comida</option>
                </select>
                <TableMontoS />
                <p>Total: $00.00</p>
            </div>
        </div>
    )
}

export const ReporteE = ({ setIsOpen }) => {
    return (
        <div className="modal">
            <div className='modal-content' >
                <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar" /></a>
                <h1>Reporte-E</h1>
                <ContainerCheckbox />
                <h3>Rango de fecha</h3>
                <ContainerDate />
                <TableMontoE />
                <p>Total: $00.00</p>
            </div>
        </div>
    )
}

export const ReporteM = ({ setIsOpen }) => {
    return (
        <div className="modal">
            <div className='modal-content' >
                <a className="close" onClick={setIsOpen} ><img src='/img/izquierda.png' target="regresar" /></a>
                <h1>Reporte-M</h1>
                <ContainerCheckbox />
                <h3>Rango de fecha</h3>
                <ContainerDate />
                <TableMontoM />
                <p>Total-S: $00.00</p>
                <p>Total-E: $00.00</p>
            </div>
        </div>
    )
}
