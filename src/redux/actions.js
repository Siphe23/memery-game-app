export const flipCard = (id) => ({
    type: 'FLIP_CARD',
    payload: id,
  });
  
  export const setScore = (score) => ({
    type: 'SET_SCORE',
    payload: score,
  });
  
  export const clearFlippedCards = () => ({
    type: 'CLEAR_FLIPPED_CARDS',
  });
  
  export const addToFlippedCards = (id) => ({
    type: 'ADD_TO_FLIPPED_CARDS',
    payload: id,
  });
  