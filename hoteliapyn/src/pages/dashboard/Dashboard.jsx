import './Dashboard.css';
import Señora from '../../components/img/señora.png';
import HoteliaNegro from '../../components/img/Hotelia horizontal blanco.svg';
import { Link } from 'react-router-dom';



function Dashboard() {
    return (
        <div class="contendorpadreH">
              <div class="contenedorlateral">
               <div class="logolhot">
                <img src={HoteliaNegro} class="logo1"/>
                  <h3 class="nombre">Angie vargas</h3>
                  <p class="nombre">angievargas2@gmail.com</p>
                  <img src={Señora} class="fotol"/>
               </div>

               <div class="accioneslat">
                  <a href="#" class="accionesh"><i class="fa-solid fa-bed"></i> Habitaciones</a>
                  <a href="#" class="accionesh"><i class="fa-solid fa-bell-concierge"></i> Reservas</a>
                  <a href="#" class="accionesh"><i class="fa-solid fa-credit-card"></i> Sus Pagos</a>
               </div>

               <div class="salirl">
                <Link to="/Login" class="accionesh"><i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</Link>
               </div>

             </div>


             <div class="contentHuesped">
                <div class="infohuesped">

                 <h1>Bienvenid@, Angie Vargas</h1>
             
      
                  <div class="sendhuesped">
                   <img src={Señora} class="foto"/>

                   <div class="accioneshuespedfoto">
                   <a class="accionesh"><i class="fa-solid fa-file-arrow-up"></i></a>
                   <a class="accionesh"><i class="fa-solid fa-upload"></i></a>
                  </div>

                  <button class="CambiarContr">Cambiar contraseña </button>
                  </div>

        
                  <div class="infopersonalhuesped">
        
                       <div class="datoshuesped">
            
                            <div>
                                 <label>Tipo de documento</label>
                                 <input type="text" placeholder="C.C Cedula de Cuidadania"/>
                            </div>
              
                            <div>
              
                                 <label for="">Número de documento</label>
                                 <input type="text" value="1025417456"/>
                            </div>

            
                            <div>
                                 <label>Nombres</label>
                                 <input type="text" placeholder="Angie Camila"/>
                            </div>

            
                            <div>
                                 <label>Apellidos</label>
                                 <input type="text" placeholder="Vargas Pinzon"/>
                            </div>

            
                            <div>
                                 <label>Fecha nacimiento</label>
                                 <input type="text" placeholder="13/09/2001"/>
                            </div>

            
                            <div>
                                 <label>Pais de origen</label>
                                 <input type="text" placeholder="Colombia"/>
                            </div>

            
                            <div>
                                 <label>Género</label>
                                 <input type="radio" name="genero" value="Mujer" checked />Mujer
                                 <input type="radio"/>Hombre
                                 <input type="radio"/>Otro
                            </div>

            
                            <div>
                                 <label>Telefono de contacto</label>
                                 <input type="text" placeholder="3135207460"/>
                            </div>

           
                            <div>
                                 <label>Email</label>
                                 <input type="text" placeholder="angievargas2@gmail.com"/>
                            </div>
            
                            
                            <button class="editar"> Actualizar </button>
                       </div>

   

                       <div class="cambiocontrasena">
                            <div>
                                 <label>Contraseña</label>
                                 <input type="password"/>
                            </div>
            
                            <div>
                                 <label>Confirmar contraseña</label>
                                 <input type="password"/>
                            </div>
            
                            <button class="editar">Cambiar</button>
          
                       </div>
                  </div>
             </div>
        </div>
   </div>
                );
}

                export default Dashboard;