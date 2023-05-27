import { useSelector } from 'react-redux'
import { Repartidor } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { ReduxStore } from '../../../../Redux/store'
import { RepartidoresList } from './Components/RepartidoresList'
const URL = `${API_URL_PROD}/repartidores`

export default function Repartidores () {
  const { fetchData } = useFetch<Repartidor[]>(URL, undefined, 'ADD_REPARTIDOR')
  const { Repartidores } = useSelector((state: ReduxStore) => state.configDB)
  return (
    <>
      <RepartidoresList
        data={Repartidores || []}
        loading={!Repartidores}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
