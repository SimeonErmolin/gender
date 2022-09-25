import React from 'react'
import { UserInput } from './modules for gender/UserInput'
import { BtnGetGender } from './modules for gender/BtnGetGender'
import { Result } from './modules for gender/Result'
import { UserWarning } from './modules for gender/UserWarning'
import {useDispatch, useSelector} from "react-redux";
import {getNameData, userName} from "./redux/actions.js";

export function App() {
  const name = useSelector(state => state.changeName.name);
  const warning = useSelector(state => state.changeWarning.warning)
  const dispatch = useDispatch();

  function sendNameChangeGender(e) {
    e.preventDefault();

    dispatch(getNameData(name))
    dispatch(userName(''))
  }

    return(
      <form onSubmit={sendNameChangeGender}>
        <UserInput />
        <BtnGetGender />
        <Result />
        {warning
          ? <UserWarning />
          : false
        }
      </form>
    )
}
