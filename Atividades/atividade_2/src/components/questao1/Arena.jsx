import Hero from './Hero'
import Enemy from './Enemy'

const hero = <Hero name = 'Avramax'/>
const enemy = <Enemy name = 'Galatea'/>

function Arena(){
    return(
        <>
        {hero} <img src = "images/avramax.png" alt = "Hero/"/>
        {enemy} <img src = "images/galatea.png" alt = "Enemy"/>
        </>
    )
}

export default Arena