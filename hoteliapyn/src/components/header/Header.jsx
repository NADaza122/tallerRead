import './Header.css'
import imagen2 from './Hotelia negro vertical.svg';
import Iframe from 'react-iframe';
import Opiniones from '../opiniones/Opiniones';
import Cards from '../../components/cards/Cards';

function Header() {
    return (
        <div className='Header'>
            <div class="bienvenida">

                <h1>Lorem ipsum dolor sit amet consectetur, <br></br>adipisicing elit. Optio, dolore
                </h1>

            </div>



            <div class="inform">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel quis alias beatae ducimus, itaque repellendus magnam
                    aperiam voluptates aspernatur laborum quod sequi quae, quo illo,
                    doloremque labore adipisci blanditiis ipsam.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor quibusdam laboriosam doloribus ipsa ducimus, error deleniti! Nemo facilis,
                    consequuntur fugit perspiciatis distinctio nihil repellendus
                    numquam quia id animi dicta autem!

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel quis alias beatae ducimus, itaque repellendus magnam
                    aperiam voluptates aspernatur laborum quod sequi quae, quo illo,
                    doloremque labore adipisci blanditiis ipsam.

                </p>
                <img src={imagen2} alt="">
                </img>
            </div>



            <Cards
                iconBell="fa-solid fa-bell-concierge"
                iconBed="fa-solid fa-bed"
                iconWifi="fa-solid fa-wifi"
                iconDumbbell="fa-solid fa-dumbbell"
                texto="Lorem ipsum dolor" />

            <div class="ubicacion" id="ubicacion">
                <h1>Ubícanos</h1>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15906.343374195563!2d-74.05873476573484!3d4.6676871946426095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1659020142299!5m2!1ses-419!2sco"
                    width="900" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
                <h2>AVENIDA CARRERA 8, #12A-42,BOGOTÁ D.C, COLOMBIA</h2>
                <hr class="hrbi" noshade="" />
                <h3>+57 601 4567899</h3>
            </div>

            <Opiniones />


        </div>

    );

}
export default Header;