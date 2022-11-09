import './styles/Rules.css';

export default function Rules(props) {
    return (
        <article className="article-rules-conteiner">
            <div className='card-rules-conteiner'>
                <div className='title-rules-conteiner'>
                    <h2 className='title-rules'>
                        {props.ruleTitle}
                    </h2>
                </div>
                <div className='rules-conteiner'>
                    <p className='rules'>{props.ruleOne}</p>
                    <p className='rules'>{props.ruleTwo}</p>
                    <p className='rules'>{props.ruleThree}</p>
                    <p className='rules'>{props.ruleFour}</p>
                    <p className='rules'>{props.ruleFive}</p>
                </div>
            </div>
        </article>
    );
}