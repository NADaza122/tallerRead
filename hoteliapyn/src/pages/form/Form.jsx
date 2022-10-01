import './Forms.css';
import HoteliaNegro from '../../components/img/Hotelia horizontal blanco.svg';
import { Link } from 'react-router-dom';

function Form(){
    return (
      <div class="bienvenida">

            <div class="navegabilidaddelleft">
               <img class="hoteliaicon" src={HoteliaNegro}/>
                 <h3 class="tituloleft">!Eres mas que bienvenido!</h3>
            </div>
            <form class="formularioregistro">
                 <h1 class="regis">Registrate</h1>

            <div class="registroh">

                <div class="atributosform">
                    <label>Tipo de documento</label>
                       <select>
                         <option>Escoja una opcion</option>
                         <option>C.C Cedula de Cuidadania</option>
                         <option>C.E Cedula de Extranjeria</option>
                         <option>N.I.P Numero de Identificacion Personal</option>
                         <option>N.I.T Numero de Identificacion Tributaria</option>
                         <option>T.I tarjeta de Identidad</option>
                         <option>P.A.P Pasaporte</option>
                       </select>
                </div>

                <div class="atributosform">
                    <label>Numero de documento</label>
                      <input type="number"/>
                </div>

                <div class="atributosform">
                     <label>Nombres</label>
                     <input type="text"/>
                </div>

                <div class="atributosform">
                     <label>Apellidos</label>
                     <input type="text"/>
                </div>

                <div class="atributosform">
                     <label>Fecha nacimiento</label>
                     <input type="date"/>
                </div>

                <div class="atributosform">
                     <label>Genero</label>
                     <input type="radio"/><a class="gen"> Mujer</a>
                     <input type="radio"/><a class="gen"> Hombre</a>
                     <input type="radio"/><a class="gen"> Otro</a>
                </div>
              
                <div class="atributosform">
                     <label>Email</label>
                     <input type="email"/>
                </div>

                <div class="atributosform">
                     <label>Telefono de contacto</label>
                     <input type="tel"/>
                </div>

                <div class="atributosform">
                     <label>Pais de origen</label>
                         <select>
                          <option></option>
                          <option>Colombia</option>
                          <option>Estados Unidos</option>
                          <option>España</option>
                          <option>Venezuela</option>
                          <option>Chile</option>
                          <option>Inglaterra</option>
                         </select>
                </div>

                <div class="atributosform">
                      <label>Foto</label>
                      <input type="file"/>
                </div>

                <div class="atributosform">
                      <i class="fa-solid fa-key"></i><label> Contraseña</label>
                      <input type="password"/>
               </div>

               <div class="atributosform">
                      <label>Confirmar contraseña</label>
                      <input type="password"/>
               </div>
           </div>
           
                          <button type="submit" class="ingresarform"><a class="regreso" href="Login.html">Ingresar</a></button>
              </form>
       </div>      );
 }

 export default Form;
