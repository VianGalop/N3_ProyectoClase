import React from 'react'

export const Input = ({ type, id, name, label, value}) => {
    return (
        <>
            <br></br>
            <label htmlFor={id}>{label}:</label>
            <br></br>
            <input  type={type} id={id} name={name} value={value}  size="5" pattern="{0,9}"/><br></br>
        </>

    )
}

export const TextArea = ({id, label, value}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label><br></br>
            <textarea className='descripcion'></textarea>
        </>
        
    )
}
