import React from 'react'
import './ContainerCheck.css'

export const InputCheck = ({ id, type, name }) => {
    return (
        <label htmlFor={id}>
            <input type={type} name={name} id={id} />{name}
        </label>
    )
}
