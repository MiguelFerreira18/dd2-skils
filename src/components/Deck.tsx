import '../css/Deck/deck.css'
import {HeroData} from '../types/types.ts'
import HeroSelect from './HeroSelect'

const prototypeHeroSelect:HeroData[] = [
    {
        heroId: 1,
        heroName: 'Monk',
        heroImage: '/src/assets/Monk_icon_trans.png',
        heroDefenses: ['Flame Aura', 'Boost Aura', 'Sky Guard Tower', 'Lightning Strike Aura']
    },
    {
        heroId: 2,
        heroName: 'Huntress',
        heroImage: '/src/assets/Huntress_icon_trans.png',
        heroDefenses: ['Explosive Trap', 'Geyser trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 3,
        heroName: 'Squire',
        heroImage: '/src/assets/Squire_icon_trans.png',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 4,
        heroName: 'Apprentice',
        heroImage: '/src/assets/Apprentice_icon_trans.png',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 5,
        heroName: 'Barbarian',
        heroImage: '/src/assets/Chibi_barb_copy.png',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 6,
        heroName: 'Mystic',
        heroImage: '/src/assets/Mystic_icon_trans.png',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 7,
        heroName: 'Adept',
        heroImage: '/src/assets/Adept_icon_trans.png',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 8,
        heroName: 'Gunwitch',
        heroImage: '/src/assets/Gunwitch_icon_trans.png',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 9,
        heroName: 'lavamancer',
        heroImage: '/src/assets/Lavamancer_icon_trans.png',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    },
    {
        heroId: 10,
        heroName: 'engineer',
        heroImage: '/src/assets/Engineer_Icon.png',
        heroDefenses: ['Explosive Trap', 'Geyser Trap', 'Poison Dart Tower', 'Blaze Balloon']
    },
    {
        heroId: 11,
        heroName: 'Dryad',
        heroImage: '/src/assets/Dryad_icon_trans.png',
        heroDefenses: ['Cannonball Tower', 'Spike Blockcade', 'Balista', 'Training Dummy']
    }
]

export default function Deck() {
    return (
        <div className='deck-div'>
            <section>
            <HeroSelect heroData={prototypeHeroSelect} />
            {/* Hero Select  */}
            {/* Gear Select */}
            {/* Relics  */}
            {/* Mod, shard and stats  selection */}
            </section>

        </div>
    )
}