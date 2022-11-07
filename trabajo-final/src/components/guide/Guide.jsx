import './Guide.css';

const Guide = (props) => {
    return (
        <article className='guide-conteiner'>
            <p className="guide-instruction">{props.instruction}</p>
        </article>
    )
}

export default Guide;