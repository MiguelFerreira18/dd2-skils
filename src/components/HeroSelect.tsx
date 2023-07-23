import '../css/Deck/HeroSelect/hero_select.css'
import {HeroData} from '../types/types.ts'
import React, { useState } from 'react'
import Modal from './Modal'

export default function HeroSelect(heroData: {heroData:HeroData[]}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    function handleCardClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        setIsModalVisible(true);
        const cardRect = event.currentTarget.getBoundingClientRect();
        setModalPosition({ x: cardRect.left, y: cardRect.top - 29 });
    }

    function handleModalClose() {
        setIsModalVisible(false);
    }

    return (
        <>
            <div className='hero-select' onClick={handleCardClick}>
                <div>
                    {isModalVisible && <Modal position={modalPosition} onClose={handleModalClose} heroData={heroData} />}
                </div>
            </div>

        </>
    )
}

