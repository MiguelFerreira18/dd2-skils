import '../css/Deck/HeroSelect/hero_select.css'
import { HeroData } from '../types/types'
import React, { useState, useCallback } from 'react'
import Modal from './Modal'

interface HeroSelectProps {
    heroes: HeroData[]
    setHeroState: React.Dispatch<React.SetStateAction<HeroData | undefined>>
}

export default function HeroSelect({ heroes, setHeroState }: HeroSelectProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const [localHeroState, setLocalHeroState] = useState<HeroData>();


    const handleCardClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            console.log('Card clicked');
            setIsModalVisible(true);
            const cardRect = event.currentTarget.getBoundingClientRect();
            setModalPosition({ x: cardRect.left, y: cardRect.top - 29 });
        },
        []
    );

    const handleImageOnClick = useCallback(
        (selectedHero: HeroData) => {
            console.log('Image clicked');
            setHeroState(selectedHero);
            setLocalHeroState(selectedHero);
            setIsModalVisible(false);
        },
        [setHeroState]
    );

    const handleModalClose = useCallback(() => {
        console.log('Modal closed');
        setIsModalVisible(false);
    }, []);

    return (
        <>
            <div className="hero-select" onClick={handleCardClick}>
                {localHeroState && (
                    <img className="hero-image" src={localHeroState.heroImage} alt="hero" />
                )}
            </div>
            {isModalVisible && (
                <div>
                    <Modal
                        position={modalPosition}
                        onClose={handleModalClose}
                        imageOnClick={handleImageOnClick}
                        heroesData={heroes}
                    />
                </div>
            )}
        </>
    );
}
