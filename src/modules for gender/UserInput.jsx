import {useDispatch, useSelector} from "react-redux";
import {userName} from "../redux/actions.js";

export function UserInput() {
  const name = useSelector(state => state.changeName.name)
  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(userName(e.target.value))
  }

  return (
    <input type="text" placeholder="Enter the name" onChange={handleChange} value={name} />
  )
}
