import { ListaLi } from "../entradas"
import './BotonesList.css'

export const ListaLu = () => {
  return (
        <ul>
            <ListaLi name="Nueva Entrada"/>
            <ListaLi name="Nuevo Gasto"/>
            <ListaLi name="Reporte"/>
            <ListaLi name="Config"/>
        </ul>
  )
}
