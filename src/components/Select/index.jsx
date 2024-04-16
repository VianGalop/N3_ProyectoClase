import React from "react";

export const Select = ({arrayCatego}) =>{
    return(
        <>
            <br></br>
            <label>Categoria:</label>
            <br></br>
            <select className="categorias">
                <option value=" " selected > </option>
                <Opcion nameCate="Transporte" />
                <Opcion nameCate="Casa" />
                <Opcion nameCate="Comida" />
            </select>     
        </>
        
    )
}


export const Opcion = ({nameCate}) =>{
    return(
        <option value={nameCate}>{nameCate}</option>
    )
}