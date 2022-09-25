import {useSelector} from "react-redux";

export function Result() {
    const gender = useSelector(state => state.changeGender.gender)
    const country = useSelector(state => state.changeCountry.country)

    return (
    <div>
      <p>Your gender:</p>
      <p>{gender}</p>
      <p>Your country:</p>
      <p>{country}</p>
    </div>
  )
}
