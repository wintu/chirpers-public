import axios from 'axios'
import firebaseApp from './firebase'
import {getAuth, TwitterAuthProvider, signInWithRedirect, getRedirectResult} from 'firebase/auth'
import {reactive} from '@vue/reactivity'

class Auth {
  constructor() {
    this.status = reactive({
      isLoggedIn: false,
      user: null,
      progress: true
    })

    this.auth = getAuth(firebaseApp)
    this.auth.useDeviceLanguage()
    this.auth.onAuthStateChanged(async user => {
      this.status.progress = false
      
      if (!user) return
      this.status.progress = false
      this.status.isLoggedIn = true
      this.status.user = user
    })
  }

  getStatus() {
    return this.status
  }

  login() {
    if (this.status.isLoggedIn) return
    this.status.progress = true
    signInWithRedirect(this.auth, new TwitterAuthProvider())
  }

  async redirectHandler() {
    try {
      const result = await getRedirectResult(this.auth)
      if (!result) return
      this.status.isLoggedIn = true
      this.status.user = result.user
      this.status.progress = false

      const credential = TwitterAuthProvider.credentialFromResult(result)

      await axios.post('/api/auth/relate', {
        idToken: await this.status.user.getIdToken(),
        accessToken: credential.accessToken,
        secret: credential.secret
      })
    } catch (e) {
      console.error(e)
    }
  }

  getToken() {
    if (!this.status.isLoggedIn) return
    return this.status.user.getIdToken()
  }

  logout() {
    this.auth.signOut()
    location.assign('/')
  }
}

export default new Auth