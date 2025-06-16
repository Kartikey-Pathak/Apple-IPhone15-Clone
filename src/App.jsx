import './App.css'
import Hero from './Hero'
import Highlight from './Highlight'
import ModelView from './ModelView'
import Nav from './Nav'
import Story from './Story'

function App() {


  return (
    <div className=' h-screen flex flex-col w-full max-w-screen bg-black'>
    <header className=' bg-black'>
      <Nav/>
      <Hero/>
    </header>
    <main>
      <Highlight/>
      <ModelView/>
      <Story/>
    </main>
      
    </div>
  )
}

export default App
