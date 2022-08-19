export function UserInput(props) {
  function handleChange(e) {
    props.onNameChange(e.target.value)
  }

  return (
    <input type="text" placeholder="Enter the name" onChange={handleChange} value={props.userValue} />
  )
}
