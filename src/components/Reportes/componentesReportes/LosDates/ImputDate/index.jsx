import React from 'react'
import './InputDate.css'

export const InputDate = ({ type, id }) => {
    return (
        <>
            <input type={type} name={id} id={id} />
        </>
    )
}