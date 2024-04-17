import React from 'react'

export const Input = ({ type, id, name, label, value, onChange}) => {
    return (
        <>
            <br></br>
            <label htmlFor={id}>{label}:</label>
            <br></br>
            <input  type={type} id={id} name={name} value={value} onChange={onChange}/><br></br>
        </>

    )
}

export const TextArea = ({id, label, value, onChange}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label><br></br>
            <textarea className='descripcion' onChange={onChange}></textarea>
        </>
        
    )
}
