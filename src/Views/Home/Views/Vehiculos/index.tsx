import { useSelector } from 'react-redux'
import { Vehiculo } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { ReduxStore } from '../../../../Redux/store'
import { VehiculosList } from './Components/VehiculosList'
const URL = `${API_URL_PROD}/vehiculos`

export default function Vehiculos () {
  const { fetchData } = useFetch<Vehiculo[]>(URL, undefined, 'ADD_VEHICLE')
  const { Vehiculos } = useSelector((state: ReduxStore) => state.configDB)
  return (
    <>
      <VehiculosList
        data={Vehiculos || []}
        loading={!Vehiculos}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
