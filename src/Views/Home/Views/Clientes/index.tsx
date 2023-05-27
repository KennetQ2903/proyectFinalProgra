import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Cliente } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { useFetch } from '../../../../Hooks/useFetch'
import { ClientList } from './Components/ClientList'
import { ReduxStore } from '../../../../Redux/store'
import { View, TouchableOpacity, Text, Modal, Alert } from 'react-native'
import { ClientsForm } from './Components/ClientsForm'

const URL = `${API_URL_PROD}/clients`
const URL_ADD = `${API_URL_PROD}/clients/add`
export default function Clientes () {
  const [toggleModal, setToggleModal] = useState(false)
  const { fetchData } = useFetch<Cliente[]>(URL, undefined, 'ADD_CLIENT')
  const { Clientes } = useSelector((state: ReduxStore) => state.configDB)

  const handleToggleModal = () => {
    setToggleModal(true)
  }

  const handleSubmit = async (values: any) => {
    console.log('VALORES ENVIADOS', values)
    return globalThis.fetch(URL_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.status === 201) {
          setToggleModal(false)
          fetchData('update')
          Alert.alert('Exito', 'Cliente Creado!')
          return null
        }
        Alert.alert('Error', 'Algo salio mal :(')

        return null
      })
      .catch(err => {
        Alert.alert('Error', `Algo salio mal Error: ${err.message}`)
      })
  }

  const closeModal = () => {
    setToggleModal(false)
  }

  return (
    <View>
      <ClientList
        data={Clientes || []}
        loading={!Clientes}
        onRefresh={() => fetchData('update')}
      />
      <Modal
        visible={toggleModal}
      >
        <ClientsForm
          closeModal={closeModal}
          handleValues={handleSubmit}
        />
      </Modal>

      <TouchableOpacity onPress={handleToggleModal}>
        <Text>Agregar un Cliente</Text>
      </TouchableOpacity>
    </View>
  )
}
