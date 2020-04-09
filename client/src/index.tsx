import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./stores";
import { Provider } from "mobx-react";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App {...store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
