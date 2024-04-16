import React, { useState } from 'react'
import { ListaLi } from "../entradas"
import './BotonesList.css'
import { Modal } from "../Modal"
import { FormEntrada, Salida } from "../Gastos"
import { FormNewCategory, ListCategory } from '../Form/Categoria'
/* import { ReporteS } from '../Reportes/Reportes' */
import { BotonesRep } from '../Reportes/tresbotones'

export const ListaLu = () => {
  const [isOpenEnt, setIsOpenEnt] = useState(false)
  const [isOpenSal, setIsOpenSal] = useState(false)
  const [isOpenBotonsRep, setIsOpenBotonsRep] = useState(false)
  const [isOpenListadoCatego, setIsOpenCatego] = useState(false)
  /* const [isOpenListado, setIsOpenListado] = useState(false) */
  return (
    <>
      <ul>
        <ListaLi name="Nueva Entrada"  setAccion={() => setIsOpenEnt(true) } />
        <ListaLi name="Nuevo Gasto" setAccion={() => setIsOpenSal(true)} />
        <ListaLi name="Reporte" setAccion={() => setIsOpenBotonsRep(true)} />
        <ListaLi name="Config" setAccion={() => setIsOpenCatego(true)} />
      </ul>
      {
        isOpenEnt &&
        <Modal title="Entrada" setIsOpen={() => setIsOpenEnt(false)}>
          <FormEntrada />
        </Modal>
      }
      {
        isOpenSal &&
        <Modal title="Salida" setIsOpen={() => setIsOpenSal(false)}>
          <Salida />
        </Modal>
      }
      {
        isOpenListadoCatego &&
        <Modal title="Lista Categorias" setIsOpen={() => setIsOpenCatego(false)}>
         <ListCategory/>
        </Modal>
      }
      
      {
        isOpenBotonsRep &&
        <BotonesRep setIsOpen={() => setIsOpenBotonsRep(false)} />

      }
    </>
  )
}
