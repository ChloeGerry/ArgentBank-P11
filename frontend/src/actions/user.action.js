import axios from 'axios';

export const GET_USER_FETCHING = 'GET_USER_FETCHING';
export const GET_USER_RESOLVED = 'GET_USER_RESOLVED';
export const LOG_OUT = 'LOG_OUT';

export const getUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_FETCHING });
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        data
      );
      dispatch({ type: GET_USER_RESOLVED, payload: result.data.body });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOG_OUT });
  };
};

// export const ADD_USER = 'ADD_USER';
// export const addUser = () => {
//   return () => {};
//   return (dispatch) => {
//     return axios
//       .post('http://localhost:3001/api/v1/user/signup')
//       .then((result) => {
//         console.log(result);
//         dispatch({ type: ADD_USER, payload: result.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
