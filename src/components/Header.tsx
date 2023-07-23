import '../css/header/header.css'



export default function Header() {
  return (
    <header>
        <h1><a href='https://about.dungeondefenders2.com/'>Dungeon Defenders 2 Skills</a></h1>
        <nav className='links'>
            <a href='https://github.com/MiguelFerreira18/dd2-skils'>Project</a>
            <a href='https://wiki.dungeondefenders2.com/wiki/Main_Page'>Wiki</a>
            <a href='#'>About Me</a>
        </nav>
    </header>
  )
}