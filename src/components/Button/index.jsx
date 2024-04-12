import React from "react";

export const Boton = ({ className, label, setAccion, idBoton }) =>{
    return(
        <button className={className} id={idBoton} onClick={setAccion}>{label}</button>
    )
}