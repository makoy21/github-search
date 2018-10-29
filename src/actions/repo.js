import {
  FETCHING_REPO,
  FETCHING_REPO_FAILED,
  FETCHING_REPO_SUCCESS,
  DELETE_REPO,
  TOGGLE_REPO,
} from "../constants";

import type Action from "./types";

const action = (type, payload) => ({ type, payload });
export const fetchRepo = (payload): Action => action(FETCHING_REPO, payload);
export const deleteRepo = (payload): Action => action(DELETE_REPO, payload);
export const toggleRepo = (payload): Action => action(TOGGLE_REPO, payload);
