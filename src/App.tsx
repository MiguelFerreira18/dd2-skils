import './App.css'
import Header from './components/Header'
import Deck from './components/Deck'
import supabase from "./config/supabase"

function App() {

  return (
    <>
    <Header />
    <Deck />
    <footer></footer>
    </>
  )
}

export default App
