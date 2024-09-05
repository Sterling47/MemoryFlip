import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import '../Gameboard/Gameboard.css';

const Gameboard = ({ shuffledCards }) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (matchedCards.length === shuffledCards.length / 2) {
      setGameOver(true); // If all pairs are matched, game is over
    }
  }, [matchedCards, shuffledCards]);

  const handleCardClick = (index) => { //let's pretend we chose index 7
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;
    
    setFlippedCards([...flippedCards, index]); //setFlippedCards[7], flippedCards = [7]

    if (flippedCards.length === 1) { //on the SECOND click, we are comparing the objects of
      const firstCard = shuffledCards[flippedCards[0]]; //shuffledCard[7]
      const secondCard = shuffledCards[index]; //against the next 9

      if (firstCard.emoji === secondCard.emoji) {
        setMatchedCards([...matchedCards, firstCard.id]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
  };

  const deckLayout = shuffledCards.map((card, index) => (
    <Card
      key={index}
      card={card}
      onClick={() => handleCardClick(index)}
      isFlipped={flippedCards.includes(index) || matchedCards.includes(card.id)} 
        //for each card 1-12
        //if the ID is a current flipped card
        //or the ID of an already matched card, isFlipped = 'flipped'
    />
  ));

  return (
    <div className="game-board">
     <div className='deck-wrapper'>{deckLayout}</div>
      {gameOver && (
        <div className='game-over'>
          <h2>Game Over!</h2>
          <button className='reset-button' onClick={resetGame}>Reset Game</button>
        </div>
      )}
    </div>
  );
};

export default Gameboard;
