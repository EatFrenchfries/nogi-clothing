import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'user', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback)