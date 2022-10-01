function Cards(props) {

    return(
    <section id="features">
    <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
    <div class="features-description">
        <div class="feature feature-blue">
            <i class={props.iconBell}></i>
            {/* <i class="fa-solid fa-bell-concierge"></i> */}
            {props.texto}
        </div>
        <div class="feature feature-black">
            <i class={props.iconBed}></i>
            
            {props.texto}
        </div>
        <div class="feature feature-blue">
            <i class={props.iconWifi}></i>
            {props.texto}
        </div>
        <div class="feature feature-black">
            <i class={props.iconDumbbell}></i>
            {props.texto}
        </div>
    </div>
    </section>
    );
}
export default Cards