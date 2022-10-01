import './formlogin.css';
import login from './login.png';

function FormLogin() {
    return (
        //FORMULARIO DE LOGUEO//
        <div class="contenedorl">

            <div class="encabezadol" >

                <div class="decoracionl"></div>

                <img class="logol" src="img/Hotelia horizontal negro.svg" />

            </div>


            <form class="formularioLogin" action="Dashboard.html" method="post">
                <div class="logo5">
                    <center><img src={login} class="icono2" /></center>
                </div>

                <div class="atributoslogin">
                    <i class="fa-solid fa-user"></i><label> Usuario:</label>
                    <input class="atributosLogin" type="text">
                        <i class="fa-solid fa-lock"></i><label> Contraseña:</label>
                        <input class="atributosLogin" type="password">
                </div>

                        <button class="btn-login" type="submit">Ingresar</button>
                        <p>¿No tienes una cuenta?<a href="Formulario.html">Regístrate aqui.</a></p>

            </form>
        </div>
            
    );
}

export default FormLogin;