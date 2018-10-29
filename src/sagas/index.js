import { put, takeLatest, all, call } from "redux-saga/effects";
import { FETCHING_REPO_SUCCESS, FETCHING_REPO_FAILED, FETCHING_REPO } from "../constants";
const api = url => fetch(url).then(response => response.json());
function* fetchRepo(action) {
  try {
    const repos = yield call(
      api,
      `https://api.github.com/search/repositories?q=${action.payload}`,
    );
    yield put({ type: FETCHING_REPO_SUCCESS, payload: repos.items });
  } catch (error) {
    yield put({ type: FETCHING_REPO_FAILED, payload: error });
  }
}
export function* watchFetchRepo() {
  yield takeLatest(FETCHING_REPO, fetchRepo);
}
export default function* rootSaga() {
  yield all([watchFetchRepo()]);
}
