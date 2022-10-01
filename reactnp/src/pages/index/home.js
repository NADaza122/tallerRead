import Nav from '../../components/nav/Nav.js';
import Imagenes from '../../components/imagenes/Imagenes.js';
import Informacion from '../../components/informacion/Informacion.js';
import Servicios from '../../components/servicios/Servicios.js';
import Ubicacion from '../../components/ubicacion/Ubicacion.js';
import Opiniones from '../../components/opiniones/Opiniones.js';
import Vacio from '../../components/vacio/Vacio.js';
import Footer from '../../components/footer/Footer.js';

function Home(){
    return(
        <Nav/>,
        <Imagenes/>,
        <Informacion/>,
        <Servicios/>,
        <Ubicacion/>,
        <Opiniones/>,
        <Vacio/>,
        <Footer/>  
    );

}

export default Home;