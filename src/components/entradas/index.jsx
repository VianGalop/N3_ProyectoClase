import React from 'react'
import './entrada.css'


export const ComponentEntrada = (saldo)=>{
    <>
    <div className="recuadro">
        <h1>Entrada</h1>
        <div className="monto">
            <h2>Monto</h2>
            <h3>{saldo}</h3>
        </div>
        <div className="descripcion">
            <label>Descripcion</label>
            <input type="text"></input>
        </div>

    </div>
    </>
}