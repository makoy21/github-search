import {
  FETCHING_REPO,
  FETCHING_REPO_FAILED,
  FETCHING_REPO_SUCCESS,
  DELETE_REPO,
  SELECT_REPO,
} from "../constants";

export default type Action =
  | { type: DELETE_REPO }
  | { type: SELECT_REPO }
  | { type: FETCHING_REPO }
  | { type: FETCHING_REPO_SUCCESS, payload: Array<Object> }
  | { type: FETCHING_REPO_FAILED, payload: Object };
