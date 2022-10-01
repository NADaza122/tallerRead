import './servicios.css';

function Servicios() {
   return (
      //SERVICIOS//
      <div class="container-servicios">
         <div class="tituloservicios">
            <h1 class="h1 tituloss">Razones por las que disfrutaras quedarte con nosotros</h1>
         </div>

         <div class="cajass">

            <div class="colum1">
               <div class="box box--blue">
                  <i class="fa-solid fa-bell-concierge"></i>
                  <p>Lorem ipsum dolor</p>
               </div>

               <div class="box box--dark">
                  <i class="fa-solid fa-bed"></i>
                  <p>Lorem ipsum dolor</p>
               </div>
            </div>

            <div class="colum2">
               <div class="box box--blue">
                  <i class="fa-solid fa-wifi"></i>
                  <p>Lorem ipsum dolor</p>
               </div>

               <div class="box box--dark">
                  <i class="fa-solid fa-dumbbell"></i>
                  <p>Lorem ipsum dolor</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Servicios;