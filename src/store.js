import { createStore } from "redux";
import rootred from './Redux/Reducer/main';

const store = createStore(
    rootred
);


export default store;