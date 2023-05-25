import axios from 'axios';

export const GET_PROFILE = 'GET_PROFILE';

export const getProfile = (token) => {
  return async (dispatch) => {
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
      console.log(result);
      await dispatch({ type: GET_PROFILE, payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };
};
