import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './style.css'
import genderSlice from "./redux/redux.js"
import {Provider} from "react-redux";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    genderApp: genderSlice
})

export const store = configureStore({
    reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)
