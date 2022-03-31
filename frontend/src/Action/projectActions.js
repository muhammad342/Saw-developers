import axios from "axios";
import {
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_FAIL,
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_ALL_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
} from "../Constant/projectConstant";
export const uploadProject = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_ADD_REQUEST,
    });

    const { data } = await axios.post("/project/addProject", formData);

    dispatch({
      type: PROJECT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProject = (formData, id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
    });

    const { data } = await axios.put(`/project/${id}`, formData);

    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const displayAllProject = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_ALL_REQUEST,
    });

    const { data } = await axios.get("/project/allProject");

    dispatch({
      type: PROJECT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DELETE_REQUEST });
    console.log(id);
    const { data } = await axios.delete(`/project/${id}`);
    dispatch({ type: PROJECT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
