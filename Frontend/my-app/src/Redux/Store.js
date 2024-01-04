import { createStore } from "redux";
import comb from './RootReducer'


let store = createStore(comb);

export default store;