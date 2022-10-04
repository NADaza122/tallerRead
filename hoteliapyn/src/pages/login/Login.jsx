import './Login.css';
import HoteliaNegro from '../../components/img/Hotelia horizontal negro.svg';
import { Link } from 'react-router-dom';
import Wave from '../../components/img/wave.svg';

function Login() {
  return (
    <body class="bodyy" >
      <div id="login">

        <div class="wave_login">
          <img src={Wave} />
        </div>

        <img class="hotelia" src={HoteliaNegro} />

        <div class="icon">
          <a><i class="fa-solid fa-user"></i></a>
        </div>

        <form>
          <label>Usuario:</label>
          <input class="dato" type="text" />

          <label>Contraseña:</label>
          <input class="dato" type="password" />
        </form>

        <div class="boton">
          <button>
            <Link to="/Dashboard" >Ingresar</Link>
          </button>
          <div class="registrate">
            <p>¿No tienes una cuenta?</p>
            <Link to="/Form" >Registrate aquí</Link>
          </div>
        </div>

      </div>
    </body>

  );
}

export default Login;
