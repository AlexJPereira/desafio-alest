export function getTokensFromLocalStorage(){
    const id = localStorage.getItem('id-token')
    const token = localStorage.getItem('access-token')
    return { id, token }
}

export function setTokenOnLocalStorage(idToken: string, accessToken: string){
    localStorage.setItem('id-token', idToken)
    localStorage.setItem('access-token', accessToken)
}

export function hasLocalToken(){
    const tokens = getTokensFromLocalStorage()
    if(tokens.id !== "undefined" && tokens.token !== "undefined" && tokens.id && tokens.token)
        return true
    else
        return false
}

const myLocalStorage = { getTokensFromLocalStorage, setTokenOnLocalStorage, hasLocalToken }
export default myLocalStorage