import Win from '../img/ibai.jpg';
import Empate from '../img/empate.jpg';
import Lose from '../img/cpuGanador.jpg';

const Resultado = (props) => {

    let resultadoFinal;

    if (props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-player">
                <h2>Ganador: Jugador</h2>
                <img className="img__result-player" src={Win} alt="ibai ganador player"></img>
            </div>
    }
    else if (props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-cpu">
                <h2>Ganador: CPU</h2>
                <img className="img__result-cpu" src={Lose} alt="ibai ganador pc"></img>
            </div>

    }
    else if (props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal =
            <div className="div__result-empate">
                <h2>¡Empate!</h2>
                <img className="img__result-empate" src={Empate} alt="ibai ganador pc"></img>
            </div>

    }

    return (
        <h2>{resultadoFinal}</h2>
    )
}
export default Resultado;