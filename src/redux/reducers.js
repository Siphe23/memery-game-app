const initialState = {
    cards: [],
    flippedCards: [],
    score: 0,
  };
  
  const gameReducer = (state = initialState, action) => {
    console.log("Action received:", action); // Log actions
    switch (action.type) {
      case 'SET_CARDS':
        return {
          ...state,
          cards: action.payload,
        };
  
      case 'ADD_TO_FLIPPED_CARDS':
        return {
          ...state,
          flippedCards: [...state.flippedCards, action.payload],
        };
  
      case 'CLEAR_FLIPPED_CARDS':
        return {
          ...state,
          flippedCards: [],
        };
  
      case 'FLIP_CARD':
        return {
          ...state,
          cards: state.cards.map((card) =>
            card.id === action.payload ? { ...card, flipped: !card.flipped } : card
          ),
        };
  
      case 'SET_SCORE':
        return {
          ...state,
          score: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default gameReducer;
  