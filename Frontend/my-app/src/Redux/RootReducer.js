import { combineReducers } from "redux";
import AccessMode_Reducer from "./Reducer/AccessMode_Reducer";

const comreducer=combineReducers({
    ACCESS_MODE:AccessMode_Reducer
})

export default comreducer;