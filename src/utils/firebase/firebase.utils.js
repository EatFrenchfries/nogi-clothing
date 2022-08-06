import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDF_2Lhl9bFDrs2I6-FMyzBu1XBriyzrto',
  authDomain: 'nogi-clothing-db.firebaseapp.com',
  projectId: 'nogi-clothing-db',
  storageBucket: 'nogi-clothing-db.appspot.com',
  messagingSenderId: '769240978265',
  appId: '1:769240978265:web:a99c89def26826de8bb248'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'user', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
}
