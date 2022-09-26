import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../redux/redux.js";
import {store} from "../main.jsx";

export function UserInput() {
  const name = useSelector(state => state.genderApp.userName)
  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(changeName(e.target.value))
  }

  return (
    <input type="text" placeholder="Enter the name" onChange={handleChange} value={name} />
  )
}
