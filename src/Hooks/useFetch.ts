import { useEffect, useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addClients, addRepartidores, addStock, addUsers, addVehicles } from '../Redux/reducer'
import { ReduxStore } from '../Redux/store'

type FetchAction = 'update'
interface State<T> {
    data?: T
    error?: Error
    fetchData: (action?: FetchAction) => Promise<void>
}

type Cache<T> = { [url: string]: T }

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  |{type: 'error'; payload: Error}

type DBActions=
  |'ADD_CLIENT'
  |'ADD_STOCK'
  |'ADD_VEHICLE'
  |'ADD_USER'
  |'ADD_REPARTIDOR'

const DBKeys: {
  [key: string]: string
} = {
  ADD_CLIENT: 'Clientes',
  ADD_REPARTIDOR: 'Repartidores',
  ADD_STOCK: 'Stock',
  ADD_USER: 'Usuarios',
  ADD_VEHICLE: 'Vehiculos'
}
// eslint-disable-next-line no-undef
export function useFetch<T=unknown> (url: string, options?: RequestInit, dbKey?: DBActions): State<T> {
  const configDB = useSelector((state: ReduxStore) => state.configDB)
  const dispatchApp = useDispatch()

  const cache = useRef<Cache<T>>({})

  const cancelRequest = useRef<boolean>(false)

  const fetchData = async (action?: FetchAction) => {
    dispatch({ type: 'loading' })

    if (cache.current[url] && action !== 'update') {
      dispatch({ type: 'fetched', payload: cache.current[url] })
      // addConfigDB(cache.current[url])
      console.log('YA HAY REGISTROS')
      return
    }

    try {
      if (configDB?.[DBKeys?.[dbKey]]?.length <= 0 || action === 'update') {
        console.log('ACTUALIZA REGISTROS')
        const response = await globalThis.fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T
        cache.current[url] = data
        if (cancelRequest.current) return

        dispatch({ type: 'fetched', payload: data })
        addConfigDB(data)
        return
      }
      console.log('YA HAY REGISTROS DE: ', DBKeys[dbKey || ''])
      return
    } catch (error) {
      if (cancelRequest.current) return

      dispatch({ type: 'error', payload: error as Error })
    }
  }

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    fetchData
  }

  const addConfigDB = (payload: any) => {
    switch (dbKey) {
      case 'ADD_CLIENT':
        return dispatchApp(addClients(payload))
      case 'ADD_REPARTIDOR':
        return dispatchApp(addRepartidores(payload))
      case 'ADD_STOCK':
        return dispatchApp(addStock(payload))
      case 'ADD_USER':
        return dispatchApp(addUsers(payload))
      case 'ADD_VEHICLE':
        return dispatchApp(addVehicles(payload))
      default:
        return null
    }
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}
