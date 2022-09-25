import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './style.css'
import {applyMiddleware, createStore} from "redux";
import {genderApp} from "./redux/reducers.js";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(
    genderApp,
    applyMiddleware(thunk)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)
