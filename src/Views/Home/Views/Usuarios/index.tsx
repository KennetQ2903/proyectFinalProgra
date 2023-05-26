import { Usuario } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { UserList } from './Components/UserList'
const URL = `${API_URL_PROD}/users`

export default function Usuarios () {
  const { data, fetchData } = useFetch<Usuario[]>(URL)
  return (
    <>
      <UserList
        data={data || []}
        loading={!data}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
