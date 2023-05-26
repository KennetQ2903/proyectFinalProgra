import { Cliente } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { ClientList } from './Components/ClientList'

const URL = `${API_URL_PROD}/clients`
export default function Clientes () {
  const { data, fetchData } = useFetch<Cliente[]>(URL)
  return (
    <>
      <ClientList
        data={data || []}
        loading={!data}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
