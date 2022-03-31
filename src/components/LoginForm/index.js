import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  MainContainer,
  FormContainer,
  LogoImage,
  ShowpasswordContainer,
  ShowPasswordLabel,
  FormPage,
  UserInput,
  UserLabel,
  CheckboxInput,
  SubmitButton,
  UsernameContainer,
  PasswordContainer,
  PasswordLabel,
  PasswordInput,
  ErrorMsgParagraph,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isShowPasswordActive: false,
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeCheckbox = event => {
    if (event.target.checked) {
      this.setState({isShowPasswordActive: true})
    } else {
      this.setState({isShowPasswordActive: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      password,
      username,
      showSubmitError,
      errorMsg,
      isShowPasswordActive,
    } = this.state

    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <FormContainer>
          <LogoImage
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <FormPage onSubmit={this.onSubmitForm}>
            <UsernameContainer>
              <UserLabel htmlFor="username" type="text">
                USERNAME
              </UserLabel>
              <UserInput
                value={username}
                onChange={this.onChangeUsername}
                id="username"
                placeholder="Username"
              />
            </UsernameContainer>
            <PasswordContainer>
              <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
              <PasswordInput
                value={password}
                onChange={this.onChangePassword}
                id="password"
                type={isShowPasswordActive ? 'text' : 'password'}
                placeholder="Password"
              />
            </PasswordContainer>
            <ShowpasswordContainer>
              <CheckboxInput
                type="checkbox"
                checked={isShowPasswordActive}
                onChange={this.onChangeCheckbox}
                id="checkbox"
              />
              <ShowPasswordLabel htmlFor="checkbox">
                Show Password
              </ShowPasswordLabel>
            </ShowpasswordContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            {showSubmitError && (
              <ErrorMsgParagraph> *{errorMsg}</ErrorMsgParagraph>
            )}
            <ErrorMsgParagraph>
              *username:rahul & password:rahul@2021
            </ErrorMsgParagraph>
          </FormPage>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default LoginForm
