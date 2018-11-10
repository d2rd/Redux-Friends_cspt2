import { LOADING, LOAD_FRIENDS, ERROR } from '../actions/friendsActions';

const initialState = {
  friends: [],
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case LOAD_FRIENDS:
      return Object.assign({}, state, {friends: action.friends, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
    default:
      return state
  }
}