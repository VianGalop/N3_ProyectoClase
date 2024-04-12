import React from 'react'

export const Input = ({ type, id, name, label, value}) => {
    return (
        <>
            <label htmlFor={id}>{label}:</label>
            <input  type={type} id={id} name={name} value={value}  size="5" pattern="{0,9}"/>
        </>

    )
}

export const TextArea = ({id, label, value}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <textarea className='descripcion'></textarea>
        </>
        
    )
}
