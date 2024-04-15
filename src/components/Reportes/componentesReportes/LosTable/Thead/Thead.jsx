import React from 'react'
import { Th } from './Th/Thindex'

export const TheadS = () => {
    return (
        <thead>
            <tr>
                <Th encabezado="date" />
                <Th encabezado="monto" />
                <Th encabezado="category" />
                <Th encabezado="saldo" />
            </tr>
        </thead>
    )
}
export const TheadE = () => {
    return (
        <thead>
            <tr>
                <Th encabezado="date" />
                <Th encabezado="monto" />
                <Th encabezado="saldo" />
            </tr>
        </thead>
    )
}
export const TheadM = () => {
    return (
        <thead>
            <tr>
                <Th encabezado="date" />
                <Th encabezado="monto" />
                <Th encabezado="tipo (e/s)" />
                <Th encabezado="saldo" />
            </tr>
        </thead>
    )
}