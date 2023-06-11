import {
  GET_USER_FETCHING,
  GET_USER_RESOLVED,
  GET_USER_REJECTED,
  LOG_OUT,
} from '../actions/user.action';

const initialState = {
  data: null,
  isLoading: false,
  hasAuthenticationFailed: false,
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
        hasAuthenticationFailed: false,
      };
    case GET_USER_REJECTED:
      return { ...state, isLoading: false, hasAuthenticationFailed: true };
    case LOG_OUT:
      return { ...state, data: null, isLoading: false };
    default:
      return state;
  }
}
