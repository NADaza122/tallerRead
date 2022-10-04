import './Home.css'
import Header from '../../components/header/Header';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/footer/Footer'



function Home() {
    return (
        <div>
            <Nav
                inicio="Inicio"
                ubicanos="Ubicanos"
                opiniones="Opiniones"
                iniciosesion="Iniciar Sesión"
            />
            <Header />

            <Footer />
        </div>
    );
}



export default Home;


