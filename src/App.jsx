import React from 'react'
import { UserInput } from './modules for gender/UserInput'
import { BtnGetGender } from './modules for gender/BtnGetGender'
import { Result } from './modules for gender/Result'
import { searchName } from './modules for gender/network'
import { UserWarning } from './modules for gender/UserWarning'

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userGender: 'Нигер',
      userCountry: 'Бездомный',
      warning: ''
    }

    this.nameChange = this.nameChange.bind(this);
    this.sendNameChangeGender = this.sendNameChangeGender.bind(this);
  }

  nameChange(e) {
    this.setState({userName: e})
  }

  async sendNameChangeGender(e) {
    e.preventDefault();
    const nameData =  await searchName(this.state.userName);
    const countryData = await searchName(this.state.userName, true);

    if (countryData == "Cannot read properties of undefined (reading 'country_id')") {
      this.setState({
        warning: 'Введи нормальное имя'
      })
    } else {
      this.setState({
        userGender: nameData,
        userCountry: countryData,
        warning: '',
        userName: '',
      })
    }
  }

  render() {
    return(
      <form onSubmit={this.sendNameChangeGender}>
        <UserInput onNameChange={this.nameChange} userValue={this.state.userName} />
        <BtnGetGender />
        <Result userGender={this.state.userGender} userCountry={this.state.userCountry} />
        {this.state.warning
          ? <UserWarning warningMessage={this.state.warning}  />
          : false
        }
      </form>
    )
  }
}
