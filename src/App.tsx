import './App.css'
import Header from './components/Header'
import Deck from './components/Deck'
import Footer from './components/Footer'
import supabase from "./config/supabase"

function App() {

  return (
    <div className='app'>
      <Header />
      <Deck />
      <Footer />
    </div>
  )
}

export default App
