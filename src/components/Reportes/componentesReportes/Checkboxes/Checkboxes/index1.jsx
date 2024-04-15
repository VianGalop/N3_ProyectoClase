import React from 'react'
import { InputCheck } from './LabelChek'
import './ContainerCheckbox.css'

export const ContainerCheckbox = () => {
    return (
        <div className="theCheckbox">
            <InputCheck id="inputSalida" type="checkbox" name="Salidas" />
            <InputCheck id="inputEntradas" type="checkbox" name="Entradas" />
        </div>
    )
}
