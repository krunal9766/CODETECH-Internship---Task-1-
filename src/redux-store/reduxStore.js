import { legacy_createStore as createStore,
         applyMiddleware, 
         combineReducers } from "redux";
import logger from "redux-logger";
import loginreducer from "../reducer/loginReducer";
import productsReducer from "../reducer/productReducer";

const combinedReducers = combineReducers({loginreducer,productsReducer});
var reduxStore = createStore(combinedReducers, applyMiddleware(logger));

export default reduxStore;