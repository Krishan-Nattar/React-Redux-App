import axios from "axios";

export const FETCHING_MAIN_DATA_START = "FETCHING_MAIN_DATA_START";
export const FETCHING_MAIN_DATA_SUCCESS = "FETCHING_MAIN_DATA_SUCCESS";
export const FETCHING_MAIN_DATA_FAILURE = "FETCHING_MAIN_DATA_FAILURE";

export const getData = () =>{
    return dispatch => {
        dispatch({ type: FETCHING_MAIN_DATA_START });
        axios
          .get("https://api.spacexdata.com/v3/launches/latest")
          .then(res => {
            console.log(res);
            dispatch({
              type: FETCHING_MAIN_DATA_SUCCESS,
              payload: res.data.ships
            });
          })
          .catch(err => {
            dispatch({ type: FETCHING_MAIN_DATA_FAILURE });
          });
      };
}