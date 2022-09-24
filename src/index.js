import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import "./index.css";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.querySelector("#root"));
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
