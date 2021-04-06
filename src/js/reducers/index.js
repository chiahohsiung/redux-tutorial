import { ADD_ARTICLE } from '../constants/action-types.js'

const initialState = {
  articles: []
};

function rootReducer(state=initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // use spread to prevent mutate the state 
    const newState = {...state};
    newState.articles = newState.articles.concat(action.payload);
    return newState;
  }
  return state;
};

export default rootReducer;