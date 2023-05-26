import { useEffect, useState } from 'react'
import { Cliente } from '../../types.global'
import { API_CODES, API_URL_PROD } from '../Config/API'
interface API_RESPONSE {
    code: number,
    data: Cliente[],
    message: string
}

const DEFAULT_RESPONSE = {
  code: API_CODES.dataEmpty,
  data: [],
  message: ''
}
export const useGetClients = () => {
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<API_RESPONSE>(DEFAULT_RESPONSE)
  const getClients = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/clients`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          setClients({
            code: API_CODES.ok,
            data: response,
            message: ''
          })
          return {
            code: API_CODES.ok,
            data: response,
            message: ''
          }
        }
        setClients({
          code: API_CODES.dataEmpty,
          data: [],
          message: ''
        })
        return {
          code: API_CODES.dataEmpty,
          data: [],
          message: ''
        }
      })
      .catch((err: Error) => {
        setLoading(false)
        setClients({
          code: API_CODES.error,
          data: [],
          message: err.message
        })
        return {
          code: API_CODES.error,
          data: [],
          message: err.message
        }
      })
  }

  return {
    clients,
    getClients,
    loading
  }
}
