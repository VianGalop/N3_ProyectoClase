import React from 'react'
import { InputDate } from './ImputDate'
import './ContainerDate.css'

export const ContainerDate = () => {
    return (
        <div className="theDate">
            <InputDate type="date" id="fechaInicio" />
            <InputDate type="date" id="fechaFinal" />
        </div>
    )
}
