import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./Reducer/userReducers";
import {
  addProjectReducer,
  allProjectReducer,
  projectDeleteReducer,
  updateProjectReducer,
} from "./Reducer/projectReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  userLogin: userReducer,
  addProject: addProjectReducer,
  allProject: allProjectReducer,
  deleteProject: projectDeleteReducer,
  updatedProject: updateProjectReducer,
});
const getUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = { userLogin: { userInfo: getUserInfoFromLocalStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
