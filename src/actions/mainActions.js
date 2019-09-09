import axios from "axios";

export const FETCHING_MAIN_DATA_START = "FETCHING_MAIN_DATA_START";
export const FETCHING_MAIN_DATA_SUCCESS = "FETCHING_MAIN_DATA_SUCCESS";
export const FETCHING_MAIN_DATA_FAILURE = "FETCHING_MAIN_DATA_FAILURE";

export const getData = (search) =>{
  if(search==""){
    search="news"
  }
    return dispatch => {
        dispatch({ type: FETCHING_MAIN_DATA_START });
        axios
          .get('https://newsapi.org/v2/everything?' +
          // 'country=us&' +
          `q=${search}&` +
          'sortBy=popularity&' +
          'apiKey=c2b2ca8c3e764b8db1ada626083c7064')
          .then(res => {
            console.log(res.data.articles);
            dispatch({
              type: FETCHING_MAIN_DATA_SUCCESS,
              payload: res.data.articles
            });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: FETCHING_MAIN_DATA_FAILURE });
          });
      };
}