import React from 'react';
import '../css/footer/footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <ul className='useful-links'>
                    <li><a href='https://wiki.dungeondefenders2.com/wiki/Main_Page'>Wiki</a></li>
                    <li>-</li>
                    <li><a href='https://forums.dungeondefenders.com/blog/1-news/'>News</a></li>
                </ul>
            </div>
            <div>
                {/*Image OF THE GAME */}
                <a href="https://chromatic.games/"><img src="/src/assets/logo_chromatic.png" alt="Crhomatic games logo" /></a>

                {/*Image OF THE developer team of dd2 */}
                <a href="https://about.dungeondefenders2.com/main.html"><img src="/src/assets/logo_dd2.png" alt="Dungeon Defenders 2 logo" /></a>
            </div>
        </footer>

    );
}

export default Footer;