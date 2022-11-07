const Opcion = (props) => {
    return (
        <div className="option" onClick={props.elegir}>
            {props.valor.eleccion}
        </div>
    )
}
export default Opcion;