import {
  INCREASE_SCORE,
  RESET_SCORE,
  INCREASE_TOP_SCORE,
  RESET_TOP_SCORE,
  SET_MESSAGE
} from '../actions';

const defaultState = {
  score: 0,
  topScore: 0,
  message: 'Click an image to begin!'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };
    case RESET_SCORE:
      return { ...state, score: 0 };
    case INCREASE_TOP_SCORE:
      return { ...state, topScore: state.topScore + 1 };
    case RESET_TOP_SCORE:
      return { ...state, topScore: 0 };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
