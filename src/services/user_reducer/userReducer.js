// initial state

const initUserState = {
  user: [],
  isLoading: true,
  error: null,
};

// reducer
import {
  GET_REQUEST_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../user_constant/userConstant";

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case GET_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
