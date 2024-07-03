import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { todosReducer } from "../Todos/TodosReducer";

// Define a simple logging middleware for debugging
const logger = store => next => action => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next State:', store.getState());
    return result;
};


const rootReducer = combineReducers({
    todosData: todosReducer
});

const middleware = [thunk, logger];  // Add logging middleware for better debugging

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)  // Apply middleware
);

export default store;
