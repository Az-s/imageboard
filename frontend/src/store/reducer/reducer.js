import {
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
} from '../actions/actions';

const initialState = {
    fetchLoading: false,
    messages: [],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MESSAGES_REQUEST:
        return {...state, fetchLoading: true};
      case FETCH_MESSAGES_SUCCESS:
        return {...state, fetchLoading: false, messages: action.payload};
      case FETCH_MESSAGES_FAILURE:
        return {...state, fetchLoading: false};
      default:
        return state;
    }
  };
  
  export default reducer;