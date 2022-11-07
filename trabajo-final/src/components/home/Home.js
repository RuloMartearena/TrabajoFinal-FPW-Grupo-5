import './Home.css';

const home = (props) => {
    return (
        <section className="section__home-conteiner">
            <nav>{props.children}</nav>
            <div className='title-conteiner'>
                <h2 className='border'>Grupo Cinco</h2>
                <h2 className='waves'>Grupo Cinco</h2>
            </div>
        </section>
    );
}

export default home;