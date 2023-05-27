import { useSelector } from 'react-redux'
import { Usuario } from '../../../../../types.global'
import { Picker } from '../../../../Components/Picker'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { UserList } from './Components/UserList'
import { ReduxStore } from '../../../../Redux/store'
const URL = `${API_URL_PROD}/users`

export default function Usuarios () {
  const { fetchData } = useFetch<Usuario[]>(URL, undefined, 'ADD_USER')
  const { Usuarios } = useSelector((state: ReduxStore) => state.configDB)
  return (
    <>
      <Picker />
      <UserList
        data={Usuarios || []}
        loading={!Usuarios}
        onRefresh={() => fetchData('update')}
      />
    </>
  )
}
