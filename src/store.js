import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { save } from "redux-localstorage-simple";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(save({ namespace: "todo-list" })))
  );

const store = configureStore({});

export default store;
