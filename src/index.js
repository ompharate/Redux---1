import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { homeReducer } from "./reducers/home";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    home: homeReducer,
  }),
  applyMiddleware(logger, thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       
    <Provider store={store}>
        <App />   
    </Provider>
     {" "}
  </React.StrictMode>
);
reportWebVitals();
