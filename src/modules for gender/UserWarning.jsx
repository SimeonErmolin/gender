import {useSelector} from "react-redux";

export function UserWarning() {
  const message = useSelector(state => state.changeWarning.warning)

  return(
    <p className="warning">{message}</p>
  )
}
