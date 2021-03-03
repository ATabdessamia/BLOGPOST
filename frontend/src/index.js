import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import "./index.css";
import "./tailwind.css";
// import reducers from "./reducers";
import App from "./App";

// const middleware = [thunk];

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// Provider store={store}
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
