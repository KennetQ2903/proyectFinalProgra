import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useRef } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'

import { Cliente } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { fonts, palette } from '../../../../Config/theme'
import { useFetch } from '../../../../Hooks/useFetch'
import { ReduxStore } from '../../../../Redux/store'
import { ClientList } from './Components/ClientList'
import { ClientsForm } from './Components/ClientsForm'

const snapPoints = ['80%', '80%', '80%']
const URL = `${API_URL_PROD}/clients`
const URL_ADD = `${API_URL_PROD}/clients/add`
export default function Clientes () {
  const modalRef = useRef<BottomSheetModal>(null)
  const { fetchData } = useFetch<Cliente[]>(URL, undefined, 'ADD_CLIENT')
  const { Clientes } = useSelector((state: ReduxStore) => state.configDB)

  const handleToggleModal = () => {
    modalRef.current?.present()
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
          modalRef.current?.close()
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

  return (
    <View style={styles.container}>
      <ClientList
        data={Clientes || []}
        loading={!Clientes}
        onRefresh={() => fetchData('update')}
      />

      <BottomSheetModal
        ref={modalRef}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        backgroundStyle={{
          backgroundColor: palette.graygreen
        }}
        handleIndicatorStyle={{
          backgroundColor: palette.white
        }}
      >
        <BottomSheetScrollView>
          <ClientsForm
            handleValues={handleSubmit}
          />
        </BottomSheetScrollView>
      </BottomSheetModal>

      <TouchableOpacity
        onPress={handleToggleModal}
        style={styles.button}
      >
        <Icon
          name='adduser'
          size={24}
          color={palette.white}
        />
        <Text style={styles.buttonText}>Agregar un Cliente</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    flex: 1
  },
  button: {
    backgroundColor: palette.complementary1,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
    marginVertical: 10
  },
  buttonText: {
    fontSize: fonts.Medium,
    color: palette.white
  }
})
