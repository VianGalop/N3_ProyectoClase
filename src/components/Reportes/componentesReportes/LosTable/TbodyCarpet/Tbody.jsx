import React from 'react'
import { TdItemsS, TdItemsE, TdItemsM } from './Tdcarpet/Tdindex'

export const TbodyItemsS = () => {
    return (
        <tbody>
            <TdItemsS date="02/01/2024" monto="$100" category="transporte" saldo="$300" />
            <TdItemsS date="01/02/2024" monto="$30" category="comida" saldo="$500" />
        </tbody>
    )
}
export const TbodyItemsE = () => {
    return (
        <tbody>
            <TdItemsE date="02/01/2024" monto="$100" saldo="$300" />
            <TdItemsE date="01/02/2024" monto="$30" saldo="$500" />
        </tbody>
    )
}
export const TbodyItemsM = () => {
    return (
        <tbody>
            <TdItemsM date="02/01/2024" monto="$100" tipo="e" saldo="$300" />
            <TdItemsM date="01/02/2024" monto="$30" tipo="s" saldo="$500" />
        </tbody>
    )
}