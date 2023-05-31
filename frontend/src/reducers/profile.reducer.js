import {
  GET_PROFILE_FETCHING,
  GET_PROFILE_RESOLVED,
  EDIT_PROFILE,
  ADD_PROFILE_FETCHING,
  ADD_PROFILE_RESOLVED,
} from '../actions/profile.action';
import { LOG_OUT } from '../actions/user.action';

const initialState = {
  data: null,
  isLoading: false,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_FETCHING:
      return { ...state, isLoading: true };
    case GET_PROFILE_RESOLVED:
      return { ...state, data: action.payload, isLoading: false };
    case LOG_OUT:
      return { ...state, data: null, isLoading: false };
    case EDIT_PROFILE:
      return { ...state, data: action.payload, isLoading: false };
    case ADD_PROFILE_FETCHING:
      return { ...state, isLoading: true };
    case ADD_PROFILE_RESOLVED:
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
}
