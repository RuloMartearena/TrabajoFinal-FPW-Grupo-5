import './NavBar.css';

const NavBar = () => {
    return (
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
    )
}

export default NavBar;