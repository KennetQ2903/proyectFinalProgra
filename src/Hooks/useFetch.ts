import { useEffect, useReducer, useRef } from 'react'

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
  | { type: 'error'; payload: Error }
// eslint-disable-next-line no-undef
export function useFetch<T = unknown> (url: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({})

  const cancelRequest = useRef<boolean>(false)

  const fetchData = async (action?: FetchAction) => {
    dispatch({ type: 'loading' })

    if (cache.current[url] && action !== 'update') {
      dispatch({ type: 'fetched', payload: cache.current[url] })
      return
    }

    try {
      const response = await globalThis.fetch(url, options)
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = (await response.json()) as T
      cache.current[url] = data
      if (cancelRequest.current) return

      dispatch({ type: 'fetched', payload: data })
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
