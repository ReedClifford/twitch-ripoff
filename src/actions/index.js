import axios from "axios";
import History from "../History";

import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT,
} from "../actions/types";

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await axios.post("http://localhost:3001/streams/", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_STREAM, payload: data });
  History.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/streams");
  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await axios.patch(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({ type: EDIT_STREAM, payload: data });
  History.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  History.push("/");
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
