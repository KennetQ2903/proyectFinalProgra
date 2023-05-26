import { Vehiculo } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { VehiculosList } from './Components/VehiculosList'
const URL = `${API_URL_PROD}/vehiculos`

export default function Vehiculos () {
  const { data, fetchData } = useFetch<Vehiculo[]>(URL)
  return (
    <>
      <VehiculosList
        data={data || []}
        loading={!data}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
