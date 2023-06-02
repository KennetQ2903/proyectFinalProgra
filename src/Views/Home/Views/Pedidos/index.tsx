import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

import { Delivery } from '../../../../../types.global'
import { API_URL_PROD } from '../../../../Config/API'
import { fonts, palette } from '../../../../Config/theme'
import { useFetch } from '../../../../Hooks/useFetch'
import { ReduxStore } from '../../../../Redux/store'
import { PedidosList } from './Components/PedidosList'
import { PedidosForm } from './Components/PedidosForm'

const URL = `${API_URL_PROD}/delivery/getAll`
const URL_ADD = `${API_URL_PROD}/delivery/add`
const snapPoints = ['80%', '80%', '80%']

export default function Pedidos () {
  const modalRef = useRef<BottomSheetModal>(null)
  const { fetchData } = useFetch<Delivery[]>(URL, undefined, 'ADD_DELIVERY')
  const { Pedidos } = useSelector((state: ReduxStore) => state.configDB)

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
      .then(async (response) => {
        if (response.status === 201) {
          modalRef.current?.close()
          fetchData('update')
          Alert.alert('Éxito', 'Pedido Creado!')
          return null
        }
        const responseJson = await response.json()
        Alert.alert('Error', `${responseJson?.message || 'Algo salio mal, Error: Desconocido'}`)
        return null
      })
      .catch(err => {
        Alert.alert('Error', `Algo salio mal Error: ${err.message}`)
      })
  }

  return (
    <View style={styles.container}>
      <PedidosList
        data={Pedidos || []}
        loading={!Pedidos}
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
          <PedidosForm
            handleValues={handleSubmit}
          />
        </BottomSheetScrollView>
      </BottomSheetModal>

      <TouchableOpacity
        onPress={handleToggleModal}
        style={styles.button}
      >
        <Icon
          name='shoppingcart'
          size={24}
          color={palette.white}
        />
        <Text style={styles.buttonText}>Agregar un Pedido</Text>
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
