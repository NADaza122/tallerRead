import './Nav.css';
import logo from './Hotelia horizontal blanco.svg';
import { Link } from "react-router-dom";



function Nav(props) {
    return (
        <div className="nav">
          <header>
          <nav class="navIndex">
        <div class="logo">
             <img class="nav-icono" src={logo} alt=""/> 
            <i class="fa-solid fa-bars"></i>
        </div>

        <div class="menu">
          
            <a href="asd" class="item">{props.inicio}
            <inicio to="/" class="item1"></inicio>
            </a>

            <a href="#ubicacion" class="item">{props.ubicanos}</a>
            <a href="#opiniones" class="item">{props.opiniones}</a>
          
       
            <Link to="/Login" class="item">
                <button class="navbar-button" >{props.iniciosesion}
                 
                </button>
              </Link>
            
        </div>
        
    </nav>

    
              </header>
        </div>
      );
  }
  
  export default Nav;