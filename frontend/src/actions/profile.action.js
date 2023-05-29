import axios from 'axios';

export const GET_PROFILE_FETCHING = 'GET_PROFILE_FETCHING';
export const GET_PROFILE_RESOLVED = 'GET_PROFILE_RESOLVED';

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
      console.log(error);
    }
  };
};
