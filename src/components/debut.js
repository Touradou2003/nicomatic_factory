import "../styles/debut.css"
import vector from "../assets/Vector.png"



export default function Debut(){
    return(
        <>
        <section id="debut">
    <div class="rectangle">
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Valorisation</h1>
            </div>
            <p>Valorisation de la production agricole locale grâce à des machines de transformation innovantes...</p>
        </div>
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Conception innovante</h1>
            </div>
            <p>Développement et conception de machines de transformation agricole innovantes ...</p>
        </div>
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Maintenance et Support</h1>
            </div>
            <p>Service complet de maintenance et support technique pour garantir la performance et...</p>
        </div>
    </div>
    </section>

      
    </>
    )

}