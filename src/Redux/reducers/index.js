import { combineReducers } from 'redux';



const initarray = {

    initialState: []



}



export const f_username = (state = initarray.initialState, action) => {

    return (action.type === 'USERNAME') ? action.payload : state;

}


let appReducer = combineReducers({ f_username})
export default appReducer;

