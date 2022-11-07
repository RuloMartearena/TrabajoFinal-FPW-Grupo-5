import { useState } from 'react';
import Opcion from './Opcion';
import Resultado from './Resultado';
import '../styles/Ppt.css';
import Player from '../img/flork_player-trans.png';
import Cpu from '../img/flork_cpu-trans.png';

export default function Juego() {

    const [eleccionJugador, setEleccionJugador] = useState({});
    const [eleccionCpu, setEleccionCpu] = useState({});

    const opciones = [
        {
            eleccion: "piedra",
            derrota: "tijera"
        },
        {
            eleccion: "papel",
            derrota: "piedra"
        },
        {
            eleccion: "tijera",
            derrota: "papel"
        }
    ]

    const elegirOpcion = (event) => {
        const jugador = opciones.find(e => e.eleccion === event.target.textContent);
        setEleccionJugador(jugador);
        eleccionCPU();
    }

    const eleccionCPU = () => {
        const eleccion = opciones[Math.floor(Math.random() * 2)]
        setEleccionCpu(eleccion);
    }

    return (
        <section className="main__conteiner-game">
            <h2 className='h2__title'>Piedra Papel o Tijeras</h2>
            <section className='section__game'>
                <section className="section__player">
                    <h2 className="section__player__h2">Jugador</h2>
                    <div>
                        <img src={Player} alt='logo jugador'></img>
                    </div>
                    <div className="section__player__choice">
                        <h3 className='section__player__choice-h3'>Elección: </h3>
                        {eleccionJugador.eleccion}
                    </div>
                </section>
                <section className='section__gameplay'>
                    <div className="gameplay__div-result">
                        <Resultado jugador={eleccionJugador} maquina={eleccionCpu} />
                    </div>
                    <div className="gameplay__div-choices">
                        {
                            opciones.map((e, index) => <Opcion
                                key={index}
                                elegir={elegirOpcion}
                                valor={opciones[index]} />)
                        }
                    </div>
                    <div className='button-conteiner'>
                        <button className='buttonHomePpt'>
                            <a href='/'>Home</a>
                        </button>
                        <button className='buttonRefreshPpt'>
                            <a href='/PPyT'>Reiniciar</a>
                        </button>
                    </div>
                </section>
                <section className="section__cpu">
                    <h2 className="section__cpu__h2">CPU</h2>
                    <div>
                        <img src={Cpu} alt='logo pc'></img>
                    </div>
                    <div className="section__cpu__choice">
                        <h3 className='section__cpu__choice-h3'>Elección: </h3>
                        {eleccionCpu.eleccion}
                    </div>
                </section>
            </section>
        </section>
    );
};