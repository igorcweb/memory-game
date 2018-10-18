import {
  INCREASE_SCORE,
  RESET_SCORE,
  INCREASE_TOP_SCORE,
  RESET_TOP_SCORE,
  SET_MESSAGE
} from './';

export const increaseScore = () => {
  return {
    type: INCREASE_SCORE
  };
};
export const resetScore = () => {
  return {
    type: RESET_SCORE
  };
};
export const increaseTopScore = () => {
  return {
    type: INCREASE_TOP_SCORE
  };
};
export const resetTopScore = () => {
  return {
    type: RESET_TOP_SCORE
  };
};
export const setMessage = payload => {
  return {
    type: SET_MESSAGE,
    payload
  };
};
