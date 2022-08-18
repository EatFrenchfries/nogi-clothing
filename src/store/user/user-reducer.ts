import { AnyAction } from 'redux'
import { signInSuccess, signOutSuccess, signInFailed, signUpFailed, signOutFailed } from './user-atcion'
import { UserData } from '../../utils/firebase/firebase.utils'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly isLogged: boolean
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  isLogged: false,
  error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLogged: true
    }
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLogged: false
    }
  }
  if (signInFailed.match(action) || signOutFailed.match(action || signUpFailed.match(action))) {
    return {
      ...state,
      error: action.payload
    }
  }

  return state
}
