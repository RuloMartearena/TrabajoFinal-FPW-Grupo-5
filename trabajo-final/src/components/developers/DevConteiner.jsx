import './styles/DevConteiner.css';
import './styles/LogoDevConteiner.css';
import './styles/NavBarDevConteiner.css';

const DevConteiner = (props) => {
    return (
        <section className='devconteiner'>
            <nav className="devconteiner-navbar-conteiner">
                <div className="devconteiner-navbar-menu">
                    <ul className='devconteiner-navbar-ul'>
                        <li className='devconteiner-navbar-li'>
                            <div className='devconteiner-navbar-logo'>
                                <h2 className='devconteiner-border'>G5</h2>
                                <h2 className='devconteiner-waves'>G5</h2>
                            </div>
                        </li>
                        <li className='devconteiner-navbar-li'>
                            <a className='devconteiner-navbar-a' href="/">
                                Home
                            </a>
                        </li>
                        <li className='devconteiner-navbar-li'>
                            <div className='devconteiner-navbar-logo'>
                                <h2 className='devconteiner-border'>G5</h2>
                                <h2 className='devconteiner-waves'>G5</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className='developers-conteiner'>
                {props.children}
            </section>
        </section>
    )
}

export default DevConteiner;