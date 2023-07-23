import '../css/Deck/HeroSelect/hero_select.css'
import { useState } from 'react'

const prototypeHeroSelect = [
    {
        heroId: 1,
        heroName: 'Monk',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F7%2F73%2FMonk_icon_trans.png&tbnid=ISz1Zezhf0hG4M&vet=12ahUKEwim45ebtKOAAxUJmycCHbW7As0QMygFegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FMonk&docid=mfQpTHOfZYanoM&w=100&h=100&q=the%20monk%20dd2&client=opera-gx&ved=2ahUKEwim45ebtKOAAxUJmycCHbW7As0QMygFegUIARDMAQ',
        heroDefenses: ['Flame Aura', 'Boost Aura', 'Sky Guard Tower', 'Lightning Strike Aura']
    },
    {
        heroId: 2,
        heroName: 'Huntress',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F1%2F17%2FHuntress_icon_trans.png&tbnid=Y_uJet7RdJlByM&vet=12ahUKEwjVrceItaOAAxUvmycCHV_XDN0QMygNegUIARDgAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FHuntress&docid=RD3kuj9iSgXU4M&w=100&h=100&q=huntress%20dd2&client=opera-gx&ved=2ahUKEwjVrceItaOAAxUvmycCHV_XDN0QMygNegUIARDgAQ',
        heroDefenses: ['Explosive Trap', 'Geyser trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'Squire',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F4%2F41%2FSquire_icon_trans.png&tbnid=39OAiWE5xen6iM&vet=12ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FSquire&docid=SB1pZefay1MM8M&w=100&h=100&q=squiredd2&client=opera-gx&ved=2ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 4,
        heroName: 'Apprentice',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdungeon-defenders-two%2Fimages%2F4%2F42%2FApprentice_render.png%2Frevision%2Flatest%3Fcb%3D20141227200021&tbnid=8oYX0_zkmySDlM&vet=12ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh..i&imgrefurl=https%3A%2F%2Fdungeondefenders2.fandom.com%2Fwiki%2FCategory%3AApprentice&docid=1at9s6_efrJ4dM&w=590&h=908&q=Apprentice%20icon%20dd2&client=opera-gx&ved=2ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'Barbarian',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F4%2F41%2FSquire_icon_trans.png&tbnid=39OAiWE5xen6iM&vet=12ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FSquire&docid=SB1pZefay1MM8M&w=100&h=100&q=squiredd2&client=opera-gx&ved=2ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 4,
        heroName: 'Mystic',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdungeon-defenders-two%2Fimages%2F4%2F42%2FApprentice_render.png%2Frevision%2Flatest%3Fcb%3D20141227200021&tbnid=8oYX0_zkmySDlM&vet=12ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh..i&imgrefurl=https%3A%2F%2Fdungeondefenders2.fandom.com%2Fwiki%2FCategory%3AApprentice&docid=1at9s6_efrJ4dM&w=590&h=908&q=Apprentice%20icon%20dd2&client=opera-gx&ved=2ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'Adept',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F4%2F41%2FSquire_icon_trans.png&tbnid=39OAiWE5xen6iM&vet=12ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FSquire&docid=SB1pZefay1MM8M&w=100&h=100&q=squiredd2&client=opera-gx&ved=2ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 4,
        heroName: 'Gunwitch',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdungeon-defenders-two%2Fimages%2F4%2F42%2FApprentice_render.png%2Frevision%2Flatest%3Fcb%3D20141227200021&tbnid=8oYX0_zkmySDlM&vet=12ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh..i&imgrefurl=https%3A%2F%2Fdungeondefenders2.fandom.com%2Fwiki%2FCategory%3AApprentice&docid=1at9s6_efrJ4dM&w=590&h=908&q=Apprentice%20icon%20dd2&client=opera-gx&ved=2ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'lavamancer',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F4%2F41%2FSquire_icon_trans.png&tbnid=39OAiWE5xen6iM&vet=12ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FSquire&docid=SB1pZefay1MM8M&w=100&h=100&q=squiredd2&client=opera-gx&ved=2ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 4,
        heroName: 'engineer',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdungeon-defenders-two%2Fimages%2F4%2F42%2FApprentice_render.png%2Frevision%2Flatest%3Fcb%3D20141227200021&tbnid=8oYX0_zkmySDlM&vet=12ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh..i&imgrefurl=https%3A%2F%2Fdungeondefenders2.fandom.com%2Fwiki%2FCategory%3AApprentice&docid=1at9s6_efrJ4dM&w=590&h=908&q=Apprentice%20icon%20dd2&client=opera-gx&ved=2ahUKEwi-xaWttqOAAxXksCcCHV9hD3EQMygCegQIARBh',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'Dryad',
        heroImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fimages%2F4%2F41%2FSquire_icon_trans.png&tbnid=39OAiWE5xen6iM&vet=12ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwiki.dungeondefenders2.com%2Fwiki%2FSquire&docid=SB1pZefay1MM8M&w=100&h=100&q=squiredd2&client=opera-gx&ved=2ahUKEwjH4a_utaOAAxXDmycCHUXpBSQQMygIegUIARDTAQ',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    }
]


export default function HeroSelect() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    function handleCardClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        setIsModalVisible(true);
        const cardRect = event.currentTarget.getBoundingClientRect();
        setModalPosition({ x: cardRect.left, y: cardRect.top - 29 });
    }

    function handleModalClose(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        setIsModalVisible(false);
    }

    return (
        <>
        <div className='hero-select' onClick={handleCardClick}>
            
        </div>
        <div>
            {isModalVisible && <Modal position={modalPosition} onClose={handleModalClose} />}
        </div>
        </>
    )
}

const Modal: React.FC<{ position: { x: number; y: number }; onClose: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void }> = ({ position, onClose }) => {
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation(); // Prevent clicks from propagating to parent elements
    };
    return (
        <div
            className="modal"
            style={{ top: position.y, left: position.x }}
        >
            {prototypeHeroSelect.map((hero) => (
                <div key={hero.heroId} className="card" >
                    <p className="hero-name">{hero.heroName}</p>
                </div>
            ))}
            <span onClick={onClose}>X</span>
        </div>
    );
};
