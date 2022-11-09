import './styles/Developers.css';

export default function Developers(props) {
    return (
        <div className='container'>
            <div className='card'>
                <div className="face face1">
                    <div className="content">
                        <h3>{props.lastName}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <div className='info-conteiner'>
                            <img className="developers-img" src={props.srcImg} alt="Develop"></img>
                            <p>
                                <b>{props.name}</b><br />
                                {props.description}<br />
                                {props.group}
                            </p>
                        </div>
                        <a href={props.gitHub} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}