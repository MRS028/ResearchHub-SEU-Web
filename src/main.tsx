import React from "react";
import ReactDOM from "react-dom/client";
// import { store } from './app/store'
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      
    </Provider> */}
    <App />
  </React.StrictMode>
);
