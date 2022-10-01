import './ubicacion.css';

function Ubicacion() {
    return (
        //UBICACION//
        <section>
            <h1 class="title">Ubicanos</h1>
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9644120169796!2d-74.07746738467435!3d4.600397243798688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1658862375723!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h1 class="ubicacion">AVENIDA CARRERA 8, #12A-42, BOGOTÁ DC, COLOMBIA</h1>
            <hr class="hrbi" noshade="" />
            <h1 class="telefono">+57 601 4567899</h1>
        </section>
    );
}

export default Ubicacion;