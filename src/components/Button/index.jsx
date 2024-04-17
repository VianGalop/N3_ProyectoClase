import React from "react";

export const Boton = ({ className, label, idBoton, onClick }) =>{
    return(
        <button className={className} id={idBoton} onClick={onClick}>{label}</button>
    )
}