import { GET_PROFILE } from '../actions/profile.action';

const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
