import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getUserData from "../../services/user_action/userAction";
import userReducer from "../../services/user_reducer/userReducer";

// create store
const store = createStore(userReducer, applyMiddleware(thunk));

store.dispatch(getUserData());
export default store;
