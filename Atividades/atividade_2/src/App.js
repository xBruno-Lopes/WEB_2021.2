import Arena from './components/questao4/Arena'
import World from './components/questao3/World'
import Hero from './components/questao4/Hero'
import Enemy from './components/questao4/Enemy'
import {HeroImg, EnemyImg} from './components/questao4/Strings'

function App() {
  return (
    <>
    <World>
      <Arena arena="World Legacy">
        <Hero name="Avramax" img={HeroImg}/>
        <Enemy name="Galatea" img={EnemyImg}/>
      </Arena>
      <Arena arena="World Legacy">
        <Hero name="Avramax" img={HeroImg}/>
        <Enemy name="Galatea" img={EnemyImg}/>
      </Arena>
      <Arena arena="World Legacy">
        <Hero name="Avramax" img={HeroImg}/>
        <Enemy name="Galatea" img={EnemyImg}/>
      </Arena>
    </World>
    </>
  ) 
}

export default App
