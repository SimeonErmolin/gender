export function Result(props) {
  return (
    <div>
      <p>Your gender:</p>
      <p>{props.userGender}</p>
      <p>Your country:</p>
      <p>{props.userCountry}</p>
    </div>
  )
}
