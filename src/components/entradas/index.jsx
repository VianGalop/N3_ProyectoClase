import './botones.css'

export const ListaLi = ({setAccion, name}) => {
    return (
        <>
            <li><button onClick={setAccion}>{name}</button></li>
        </>
    )
}