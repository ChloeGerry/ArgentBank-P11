import axios from 'axios';

export const GET_PROFILE_FETCHING = 'GET_PROFILE_FETCHING';
export const GET_PROFILE_RESOLVED = 'GET_PROFILE_RESOLVED';
export const GET_PROFILE_REJECTED = 'GET_PROFILE_REJECTED';
export const EDIT_PROFILE_FETCHING = 'EDIT_PROFILE_FETCHING';
export const EDIT_PROFILE_RESOLVED = 'EDIT_PROFILE_RESOLVED';
export const EDIT_PROFILE_REJECTED = 'EDIT_PROFILE_REJECTED';
export const ADD_PROFILE_FETCHING = 'ADD_PROFILE_FETCHING';
export const ADD_PROFILE_RESOLVED = 'ADD_PROFILE_RESOLVED';
export const ADD_PROFILE_REJECTED = 'ADD_PROFILE_REJECTED';

export const getProfile = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_PROFILE_FETCHING });
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        token,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: GET_PROFILE_RESOLVED, payload: result.data.body });
    } catch (error) {
      dispatch({ type: GET_PROFILE_REJECTED });
      console.log(error);
    }
  };
};

export const editProfile = (token, data) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_PROFILE_FETCHING });
    try {
      const result = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: EDIT_PROFILE_RESOLVED, payload: result.data.body });
    } catch (error) {
      dispatch({ type: EDIT_PROFILE_REJECTED });
      console.log(error);
    }
  };
};

export const addProfile = (data) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PROFILE_FETCHING });
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/user/signup',
        data
      );
      dispatch({ type: ADD_PROFILE_RESOLVED, payload: result.data.body });
    } catch (error) {
      console.log(error);
    }
  };
};
