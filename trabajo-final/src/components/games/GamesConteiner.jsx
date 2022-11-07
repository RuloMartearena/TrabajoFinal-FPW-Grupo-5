import './GamesConteiner.css';
import './Games.css';
import '../navbar/NavBar.css';

const GamesConteiner = (props) => {
    return (
        <section className='gamesConteiner-conteiner'>
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
            <article className='gamesConteiner-games'>
                {props.children}
            </article>
        </section>
    );
}

export default GamesConteiner;