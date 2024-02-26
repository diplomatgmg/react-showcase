import React, { type ReactElement } from 'react'
import Card from '../components/Card'
import FormInput from './FormInput'

const RegistrationForm = (): ReactElement => {
  const usernameValidator = (value: string): boolean => {
    return /^[a-zA-Z0-9_]+$/.test(value)
  }

  const emailValidator = (value: string): boolean => {
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)
  }

  const passwordValidator = (value: string): boolean => {
    return /^.{6,16}$/.test(value)
  }

  return (
    <Card name={'Registration'} widthClass={'col-md-6'}>
      <form>
        <div className="row">
          <FormInput
            name="username"
            type="text"
            placeHolder="Username"
            fieldValidator={usernameValidator}
          />
          <FormInput
            name="email"
            type="email"
            placeHolder="Email"
            fieldValidator={emailValidator}
          />
        </div>
        <div className="row">
          <FormInput
            name="password"
            type="password"
            placeHolder="Password"
            fieldValidator={passwordValidator}
          />
          <FormInput
            name="password2"
            type="password"
            placeHolder="Repeat Password"
            fieldValidator={passwordValidator}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </Card>
  )
}

export default RegistrationForm
