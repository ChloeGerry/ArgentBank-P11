import {
  GET_PROFILE_FETCHING,
  GET_PROFILE_RESOLVED,
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
    default:
      return state;
  }
}
