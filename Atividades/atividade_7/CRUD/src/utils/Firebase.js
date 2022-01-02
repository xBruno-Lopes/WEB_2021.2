import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import firebase_key from '../keys/firebase_key'

export default class Firebase{
    constructor(){
        firebase.initializeApp(firebase_key)
    }

    getFirestore(){
        return firebase.firestore()
    }
}