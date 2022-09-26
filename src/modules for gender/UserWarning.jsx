import {useSelector} from "react-redux";

export function UserWarning() {
  const message = useSelector(state => state.genderApp.warning)

  return(
    <p className="warning">{message}</p>
  )
}
