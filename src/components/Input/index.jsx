import React from 'react'

export const Input = ({ type, id, name, label, onChange, value}) => {
    return (
        <>
            <label htmlFor={id}>{label}:</label>
            <input value={value} onChange={(e)=>onChange(e.target.value)} type={type} id={id} name={name} readOnly />
        </>

    )
}

export const TextArea = ({id, label, value}) =>{
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <textarea className='descripcion' value={value} readOnly></textarea>
        </>
        
    )
}

