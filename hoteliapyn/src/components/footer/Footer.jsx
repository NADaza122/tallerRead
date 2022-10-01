import './Footer.css';
function Footer() {
    return(

       <footer class="footer">
          <div class="direccion">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quasi vitae, autem dolor quos.</p>
            </div>
            <hr class="fot"/>

          <div class="direccion">
            <a href="#" class="diret"><i class="fa-solid fa-location-dot"></i> Avenida carrera 8, #12a-42, Bogota DC, Colombia</a>
            <a href="#" class="diret"><i class="fa-solid fa-phone"></i> +57 601 4567899</a>
          </div>
          <hr class="fot"/>

          <div class="direccion">
            <div>
              <p class="p1">Politicas de privacidad</p>
            </div>
            <div>
              <p class="p1">Politicas de privacidad</p>
            </div>
          </div>
          <hr class="fot"/>

          <div class="redes">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </div>
</footer>        
        
    )
}

export default Footer;