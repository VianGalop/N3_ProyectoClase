import React from 'react'

export const TdItemsS = ({ date, monto, category, saldo }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{monto}</td>
            <td>{category}</td>
            <td>{saldo}</td>
        </tr>
    )
}
export const TdItemsE = ({ date, monto, saldo }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{monto}</td>
            <td>{saldo}</td>
        </tr>
    )
}
export const TdItemsM = ({ date, monto, tipo, saldo }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{monto}</td>
            <td>{tipo}</td>
            <td>{saldo}</td>
        </tr>
    )
}
