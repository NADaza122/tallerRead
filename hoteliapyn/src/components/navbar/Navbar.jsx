import { Link } from 'react-router-dom';
import logo from '../../components/img/Hotelia horizontal blanco.svg';

function Navbar() {
    return (
        <div className="nav">
            <header>
                <nav class="navIndex">
                    <div class="logo">
                        <img class="nav-icono" src={logo} alt="" />
                        <i class="fa-solid fa-bars"></i>
                    </div>

                    <div class="menu">

                        <Link to="/Dashboard" class="item">
                            <a href='aasdasd.html' class="item">Dashboard</a>
                        </Link>


                        <Link to="/" class="item">
                            <button class="navbar-button" >
                                Inicio
                            </button>
                        </Link>


                    </div>

                </nav>


            </header>
        </div>
    );
}

export default Navbar;
