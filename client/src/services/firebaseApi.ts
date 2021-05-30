import firebase from 'firebase'
import { firebaseConfig } from '../services/config'
import localStorage from './localStorage'

export interface IUserLoginResponse{
    accessToken: string,
    idToken: string,
    providerId: string,
    signInMethod: string
}

firebase.initializeApp(firebaseConfig)

export const user = {
    name: undefined as (string | undefined | null),
    picture: undefined as (string | undefined | null)
}

export async function firebaseAuth(){

    if(localStorage.hasLocalToken()){
        const tokens = localStorage.getTokensFromLocalStorage()
        const provider = firebase.auth.GoogleAuthProvider.credential(tokens.id, tokens.token)
        const response = await firebase.auth().signInWithCredential(provider)

        user.name = response.user?.displayName
        user.picture = response.user?.photoURL

    }else{
        const provider = new firebase.auth.GoogleAuthProvider()
        const response = await firebase.auth().signInWithPopup(provider)

        user.name = response.user?.displayName
        user.picture = response.user?.photoURL

        // por algum motivo nao temos acesso ao access token usando typescript
        const responseFix = (response.credential as unknown) as IUserLoginResponse
        localStorage.setTokenOnLocalStorage(responseFix.idToken, responseFix.accessToken)
    }
    
    return user

}
