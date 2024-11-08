import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, setScore } from './redux/actions';
import axios from 'axios';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const flippedCards = useSelector((state) => state.flippedCards);
  const score = useSelector((state) => state.score);

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Fetch cards from the server
    axios.get('/cards')
      .then((response) => {
        dispatch({ type: 'SET_CARDS', payload: response.data });
      })
      .catch((error) => console.error("Failed to fetch cards:", error));

    // Hide the welcome message after 3 seconds
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Duration of the animation
  }, [dispatch]);

  const handleCardClick = (id) => {
    if (flippedCards.length < 2) {
      dispatch(flipCard(id));

      if (flippedCards.length === 1) {
        const [firstCard] = flippedCards;
        const secondCard = id;

        if (cards[firstCard].value === cards[secondCard].value) {
          dispatch(setScore(score + 1));
        } else {
          setTimeout(() => {
            dispatch(flipCard(firstCard));
            dispatch(flipCard(secondCard));
          }, 1000);
        }
      }
    }
  };

  return (
    <div className="App">
      {showWelcome && <div className="welcome-message">Welcome to the Guessing Game!</div>}
      <h1>Memory Game</h1>
      {cards.length === 0 ? <p>Loading cards...</p> : (
        <div className="game-board">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.flipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              {card.flipped ? card.value : '?'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
