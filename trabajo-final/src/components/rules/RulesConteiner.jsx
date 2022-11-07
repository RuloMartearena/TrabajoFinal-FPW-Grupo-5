import './Rules.css';
import './RulesConteiner.css';
import '../navbar/NavBar.css';

const RulesConteiner = (props) => {
    return (
        <section className="ruleConteiner-conteiner">
            <nav className="menu-container">
                <div className="menu">
                    <span></span>
                    <ul className='ul-navbar'>
                        <li className='li-navbar'>
                            <a className='a-navbar' href="/Games">
                                Games
                            </a>
                        </li>
                        <li className='li-navbar'>
                            <a className='a-navbar' href="/Guide">
                                Guide
                            </a>
                        </li>
                        <li className='li-navbar'>
                            <a className='a-navbar' href="/">
                                Home
                            </a>
                        </li>
                        <li className='li-navbar'>
                            <a className='a-navbar' href="/Developers">
                                Developers
                            </a>
                        </li>
                        <li className='li-navbar'>
                            <a className='a-navbar' href="/Rules">
                                Rules
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <article className='ruleConteiner-rules'>
                {props.children}
            </article>
        </section>
    )
}

export default RulesConteiner;