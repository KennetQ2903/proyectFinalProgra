import { useEffect, useState } from 'react'
import { loginForm } from '../Views/Login/types.login'
import { API_URL_LOCAL } from '../Config/API'

export const useLogin = () => {
  const [isAuth, setIsAuth] = useState(false)
  const auth = async (form: loginForm) => {
    return globalThis
      .fetch(`${API_URL_LOCAL}/auth`)
      .then((res) => console.log(res))
  }
}
