import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantlistReducer } from "./reducers/restaurantReducer";

// reducer
const reducers=combineReducers({

restaurantReducer:restaurantlistReducer


})

// middleware
const middleware=[thunk]



// create store
const store=createStore(reducers,applyMiddleware(...middleware))


export default store