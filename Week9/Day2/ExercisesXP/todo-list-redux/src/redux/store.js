import { createStore } from 'redux';
import {todoReducer} from "./todoReducer.js";

const store = createStore(todoReducer);

export default store;