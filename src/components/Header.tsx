import '../css/header/header.css'



export default function Header() {
  return (
    <header>
        <h1><a href='https://wiki.dungeondefenders2.com/wiki/Main_Page'>Dungeon Defenders 2 Skills</a></h1>
        <nav className='links'>
            <a href='#'>Skills</a>
            <a href='#'>Wiki</a>
            <a href='#'>About Me</a>
        </nav>
    </header>
  )
}