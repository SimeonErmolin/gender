import React, { useState } from 'react'
import { UserInput } from './modules for gender/UserInput'
import { BtnGetGender } from './modules for gender/BtnGetGender'
import { Result } from './modules for gender/Result'
import { searchName } from './modules for gender/network'
import { UserWarning } from './modules for gender/UserWarning'

export function App() {
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('Нигер');
  const [userCountry, setUserCountry] = useState('Бездомный');
  const [warning, setWarning] = useState('');

  function nameChange(e) {
    setUserName(e)
  }

  async function sendNameChangeGender(e) {
    e.preventDefault();
    const nameData =  await searchName(userName);
    const countryData = await searchName(userName, true);

    if (countryData == "Cannot read properties of undefined (reading 'country_id')") {
      setWarning('Введи нормальное имя');
    } else {
      setUserGender(nameData);
      setUserCountry(countryData);
      setWarning('');
      setUserName('');
    }
  }

    return(
      <form onSubmit={sendNameChangeGender}>
        <UserInput onNameChange={nameChange} userValue={userName} />
        <BtnGetGender />
        <Result userGender={userGender} userCountry={userCountry} />
        {warning
          ? <UserWarning warningMessage={warning}  />
          : false
        }
      </form>
    )
}
