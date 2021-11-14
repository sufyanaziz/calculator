import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import calculatorReducer from "./reducer/calculatorReducer";

const initialState = {};
const middleware = [thunk];
// webDevTools just for dev --------
// const webDevtoolsExtension =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
  calc: calculatorReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    //   webDevtoolsExtension
  )
);

export default store;
