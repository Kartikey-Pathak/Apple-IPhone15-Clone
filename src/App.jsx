import './App.css'
import Hero from './Hero'
import Highlight from './Highlight'
import Nav from './Nav'

function App() {


  return (
    <div className=' h-screen flex flex-col w-full max-w-screen bg-black'>
    <header className=' bg-black'>
      <Nav/>
      <Hero/>
    </header>
    <main>
      <Highlight/>
    </main>
      
    </div>
  )
}

export default App
