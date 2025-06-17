import './App.css'
import Foot from './Foot'
import Game from './Game'
import Hero from './Hero'
import Highlight from './Highlight'
import ModelView from './ModelView'
import Nav from './Nav'
import Story from './Story'

function App() {


  return (
    <div className=' h-screen flex flex-col w-full max-w-screen bg-black'>
    <header className='bg-black w-[100%] max-w-screen'>
      <Nav/>
      <Hero/>
    </header>
    <main>
      <Highlight/>
      <ModelView/>
      <Story/>
      <Game/>
    </main>
    <footer>
      <Foot/>
    </footer>
      
    </div>
  )
}

export default App
