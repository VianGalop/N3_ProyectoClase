import React,{useState} from 'react'
import { ListaLi } from "../entradas"
import './BotonesList.css'
import {Modal} from "../Modal"
import {FormEntrada, Salida} from "../Gastos"
import {FormNewCategory} from '../Form/Categoria'

export const ListaLu = () => {
  const [isOpenEnt, setIsOpenEnt] = useState(false)
  const [isOpenSal, setIsOpenSal] = useState(false)
  const [isOpenCatego, setIsOpenCatego] = useState(false)
  /* const [isOpenListado, setIsOpenListado] = useState(false) */
  return (
    <>
        <ul>
            <ListaLi name="Nueva Entrada"  setAccion={() => setIsOpenEnt(true)} />
            <ListaLi name="Nuevo Gasto" setAccion={() => setIsOpenSal(true)} />
            <ListaLi name="Reporte" setAccion="" />
            <ListaLi name="Config" setAccion={() => setIsOpenCatego(true)}/>
        </ul>
        {
          isOpenEnt  &&
          <Modal title="Entrada" setIsOpen={() => setIsOpenEnt(false)}>
              <FormEntrada />
          </Modal>
       }
       {
          isOpenSal  &&
          <Modal title="Salida" setIsOpen={() => setIsOpenSal(false)}>
              <Salida />
          </Modal>
       }
       {
        isOpenCatego  &&
        <Modal title="NuevaCategoria" setIsOpen={() => setIsOpenCatego(false)}>
            <FormNewCategory />
        </Modal>
        }
    </>
  )
}
