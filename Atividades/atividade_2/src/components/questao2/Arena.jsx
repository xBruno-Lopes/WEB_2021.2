import Hero from './Hero'
import Enemy from './Enemy'
import {HeroImg, EnemyImg} from './Strings'

const hero = <Hero name = 'Avramax' img = {HeroImg}/>
const enemy = <Enemy name = 'Galatea' img = {EnemyImg}/>

function Arena(props){
    return(
        <>
        <h2>Arena: {props.arena}</h2>
        {hero}
        {enemy}
        </>
    )
}

export default Arena