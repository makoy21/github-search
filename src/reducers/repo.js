import {
  FETCHING_REPO,
  FETCHING_REPO_FAILED,
  FETCHING_REPO_SUCCESS,
  DELETE_REPO,
  SELECT_REPO,
  TOGGLE_REPO,
} from "../constants";
const initialState: {
  items: Array<Object>,
  selectedItems: Map<string, number>,
  page: number,
  fetching: boolean,
  errorMessage: string,
} = {
  items: [],
  selectedItems: new Map(),
  page: 0,
  fetching: false,
  errorMessage: "",
};

const toggleSelectedItem = (selectedItems, item) => {
  if (selectedItems.has(item[0])) {
    selectedItems.delete(item[0]); // 0 index for the key
    console.log("selectedItems", selectedItems);
    return new Map([...Array.from(selectedItems)]);
  } else {
    return new Map([...Array.from(selectedItems), item]);
  }
};
export default function repo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_REPO:
      return {
        ...state,
        fetching: true,
      };
    case FETCHING_REPO_SUCCESS:
      return {
        ...state,
        items: payload,
        fetching: false,
        errorMessage: "",
      };
    case FETCHING_REPO_FAILED:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case SELECT_REPO: {
      return {
        ...state,
        selectedItems: new Map([...Array.from(state.selectedItems), payload]),
      };
    }
    case TOGGLE_REPO: {
      return {
        ...state,
        selectedItems: toggleSelectedItem(state.selectedItems, payload),
      };
    }
    case DELETE_REPO: {
      return {
        ...state,
        selectedItems: toggleSelectedItem(state.selectedItems, payload),
        items: state.items.filter(item => item.id !== payload[0]),
      };
    }
    default:
      return state;
  }
}
