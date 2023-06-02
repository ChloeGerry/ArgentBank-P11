import {
  GET_USER_FETCHING,
  GET_USER_RESOLVED,
  GET_USER_REJECTED,
  LOG_OUT,
} from '../actions/user.action';

const initialState = {
  data: null,
  isLoading: false,
  hasAuthentificationFailed: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FETCHING:
      return { ...state, isLoading: true };
    case GET_USER_RESOLVED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasAuthentificationFailed: false,
      };
    case GET_USER_REJECTED:
      return { ...state, isLoading: false, hasAuthentificationFailed: true };
    case LOG_OUT:
      return { ...state, data: null, isLoading: false };
    default:
      return state;
  }
}
