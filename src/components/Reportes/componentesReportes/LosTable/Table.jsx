import React from 'react'
import { TheadS, TheadE, TheadM } from './Thead/Thead'
import { TbodyItemsS, TbodyItemsE, TbodyItemsM } from './TbodyCarpet/Tbody'
import './TableMonto.css'

export const TableMontoS = () => {
    return (
        <table>
            <TheadS />
            <TbodyItemsS />
        </table>
    )
}
export const TableMontoE = () => {
    return (
        <table>
            <TheadE />
            <TbodyItemsE />
        </table>
    )
}
export const TableMontoM = () => {
    return (
        <table>
            <TheadM />
            <TbodyItemsM />
        </table>
    )
}