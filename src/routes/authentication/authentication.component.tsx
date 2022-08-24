import { useEffect} from 'react'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import { AuthContainer } from './authentication.styles'

const Authentication = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <AuthContainer>
      <div>
        <SignInForm />
      </div>
      <div>
        <SignUpForm />
      </div>
    </AuthContainer>
  )
}

export default Authentication
