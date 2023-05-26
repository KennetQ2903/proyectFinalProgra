import { useEffect } from 'react'
import { useGetClients } from '../../../../Services/useGetClients'
import { ClientList } from './Components/ClientList'
export default function Clientes () {
  const { getClients, clients, loading } = useGetClients()
  useEffect(() => {
    if (clients.data.length === 0) {
      getClients()
    }
  }, [])
  return (
    <>
      <ClientList
        data={clients.data}
        loading={loading}
        onRefresh={getClients}
      />
    </>
  )
}
