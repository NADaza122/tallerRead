import './opiniones.css';
import cliente1 from './cliente1.PNG';
import cliente2 from './cliente2.PNG';

function Opiniones() {
  return (
    //OPINIONES USUARIOS//
    <section class="encabezadocomen">
      <h1 class="titulocomentarios">Nuestros usuarios dicen...</h1>
      <div class="calificaciones">
      <div class="slide">
      <div class="slide-inner">
        <input class="slide-open" type="radio" id="slide-1" name="slide" aria-hidden="true" hidden="" checked="checked" />
        <div class="slide-item">
          <div class="comen">
            <div class="perfilescomen">
            <img src={cliente1} class="huespedcomen" />
              <div>
                <h6 class="nombreh">Diego Rodriguez</h6>
                <p class="estrellas">
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i id="valoracionestrella" class="fa-solid fa-star"></i></span>
                </p>
              </div>
            </div>
            <p class="brevedescrp">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

        <input class="slide-open" type="radio" id="slide-2" name="slide" aria-hidden="true" hidden="" />
        <div class="slide-item">
          <div class="comen">
            <div class="perfilescomen">
              <img src={cliente2} class="huespedcomen" />
              <div>
                <h6 class="nombreh">Diana Garcia</h6>
                <p class="estrellas">
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i id="valoracionestrella" class="fa-solid fa-star"></i></span>
                </p>
              </div>
            </div>
            <p class="brevedescrp">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

        <input class="slide-open" type="radio" id="slide-3" name="slide" aria-hidden="true" hidden="" />
        <div class="slide-item">
          <div class="comen">
            <div class="perfilescomen">
            <img src={cliente1} class="huespedcomen" />
              <div>
                <h6 class="nombreh">Diego Rodriguez</h6>
                <p class="estrellas">
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i id="valoracionestrella" class="fa-solid fa-star"></i></span>
                </p>
              </div>
            </div>
            <p class="brevedescrp">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

        <label for="slide-3" class="slide-control prev control-1"></label>
        <label for="slide-2" class="slide-control next control-1"></label>
        <label for="slide-1" class="slide-control prev control-2"></label>
        <label for="slide-3" class="slide-control next control-2"></label>
        <label for="slide-2" class="slide-control prev control-3"></label>
        <label for="slide-1" class="slide-control next control-3"></label>
        <ol class="slide-indicador">
          <li>
            <label for="slide-1" class="slide-circulo">-</label>
          </li>
          <li>
            <label for="slide-2" class="slide-circulo">-</label>
          </li>
          <li>
            <label for="slide-3" class="slide-circulo">-</label>
          </li>
        </ol>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Opiniones;