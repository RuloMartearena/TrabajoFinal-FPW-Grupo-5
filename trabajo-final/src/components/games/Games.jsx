import './styles/Games.css';

const Games = (props) => {
    return (
        <article className='games-conteiner'>
            <div className='games-card'>
                <a className='games-a' href={props.gameHref} target="_blank" rel="noreferrer">
                    <img className="games-img" src={props.gameImg} alt="Game"></img>
                </a>
            </div>
        </article>
    );
}

export default Games;