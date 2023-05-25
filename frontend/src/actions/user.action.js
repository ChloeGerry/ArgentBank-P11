import axios from 'axios';

// export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';

export const getUser = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        data
      );
      await dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };
};

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
