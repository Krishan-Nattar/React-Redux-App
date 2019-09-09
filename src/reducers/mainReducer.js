


const initialState = {
    data: 'My Data!!'
}



export const reducer = (state = initialState, action) =>{
    switch(action.date){
        default:
            return {
                ...state
            }
    }
}