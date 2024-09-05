import React from 'react'
import './Card.css'
import TL from '../../assets/turing.png'

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => {
        console.log("Card clicked:", card.emoji);
        onClick();
    }}>
        <div className='card-face card-back'>
          <img src={TL} className='logo' />
          </div>
        <div className='card-face card-front'>{card.emoji}</div>
    </div>
  )
}

export default Card
