//action

import {
  GET_REQUEST_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../user_constant/userConstant";

const getUserData = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();
    dispatch({ type: GET_USER_SUCCESS, payload: user });
  } catch (error) {
    // console.log(error.message);
    dispatch({ type: GET_REQUEST_FAILED, payload: error.message });
  }
};

export default getUserData;
