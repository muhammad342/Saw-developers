import {
  PROJECT_ADD_FAIL,
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ALL_FAIL,
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
} from "../Constant/projectConstant";
export const addProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_ADD_REQUEST:
      return { load: true };
    case PROJECT_ADD_SUCCESS:
      return { load: false, project: action.payload };
    case PROJECT_ADD_FAIL:
      return { load: false, err: action.payload };
    default:
      return state;
  }
};

export const updateProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: true };
    case PROJECT_UPDATE_SUCCESS:
      return { loading: false, result: action.payload };
    case PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const allProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_ALL_REQUEST:
      return { loading: true };
    case PROJECT_ALL_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECT_ALL_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};

export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true };
    case PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_DELETE_FAIL:
      return { loading: false, errorss: action.payload };
    default:
      return state;
  }
};
