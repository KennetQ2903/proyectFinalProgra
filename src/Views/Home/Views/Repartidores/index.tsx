import { Repartidor } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { RepartidoresList } from './Components/RepartidoresList'
const URL = `${API_URL_PROD}/repartidores`

export default function Repartidores () {
  const { data, fetchData } = useFetch<Repartidor[]>(URL)
  return (
    <>
      <RepartidoresList
        data={data || []}
        loading={!data}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
