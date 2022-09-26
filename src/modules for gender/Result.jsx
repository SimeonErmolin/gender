import {useSelector} from "react-redux";

export function Result() {
    const gender = useSelector(state => state.genderApp.gender)
    const country = useSelector(state => state.genderApp.country)

    return (
    <div>
      <p>Your gender:</p>
      <p>{gender}</p>
      <p>Your country:</p>
      <p>{country}</p>
    </div>
  )
}
