import { useState,FormEvent,ChangeEvent } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { googleSignInStart, emailSignInStart } from '../../store/user/user-atcion'


import { SignInContainer } from './sign-in-form.styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: ''
}


const SignInForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart())
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log('Sign in encountered an error.',error)
    }
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
