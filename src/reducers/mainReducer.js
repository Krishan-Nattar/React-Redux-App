import { FETCHING_MAIN_DATA_START } from "../actions";
import { FETCHING_MAIN_DATA_SUCCESS } from "../actions";
import { FETCHING_MAIN_DATA_FAILURE } from "../actions";



const initialState = {
    data: [],
    isLoading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    // console.log("here");
    switch (action.type) {
      case FETCHING_MAIN_DATA_START:
        // console.log("or");
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCHING_MAIN_DATA_SUCCESS:
        // console.log("succes");
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: ""
        };
      case FETCHING_MAIN_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: "FAIL"
        };
      default:
        // console.log("ss");
        return state;
    }
  };