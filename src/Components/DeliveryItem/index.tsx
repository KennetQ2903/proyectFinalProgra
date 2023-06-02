import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { FC, useRef, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Delivery } from '../../../types.global'
import { API_URL_PROD } from '../../Config/API'
import { fonts, palette } from '../../Config/theme'

const snapPoints = ['50%', '50%', '50%']
const URL_COMPLETE_DELIVERY = `${API_URL_PROD}/delivery/completeDelivery`

interface Props {
    delivery: Delivery
    handleUpdate(): Promise<void>
}

export const DeliveryItem: FC<Props> = ({ delivery, handleUpdate }) => {
  const { destino, origen, cliente, estado, id } = delivery
  const modalRef = useRef<BottomSheetModal>(null)
  const [loading, setLoading] = useState(false)
  const handleModal = () => {
    modalRef.current?.present()
  }

  const completeDelivery = async () => {
    setLoading(true)
    return fetch(URL_COMPLETE_DELIVERY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Pedido completado')
          handleUpdate()
        }
        if (res.status === 404) {
          Alert.alert('Error al completar el pedido')
        }
        setLoading(false)
        modalRef.current?.close()
      })
      .catch(() => {
        setLoading(false)
        modalRef.current?.close()
      })
  }
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleModal}>
        <View style={styles.details}>
          <Text style={styles.title}>Pedido #{id}</Text>
          <Text style={styles.content}>Origen: {origen}</Text>
          <Text style={styles.content}>Destino: {destino}</Text>
          <Text style={styles.content}>Cliente: {cliente.nombre} {cliente.apellido}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Icon
            name={estado === 'Pendiente' ? 'clockcircleo' : 'checkcircle'}
            size={24}
            color={palette.white}
          />
          <Text style={styles.status}>{estado}</Text>
        </View>
      </TouchableOpacity>
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
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.9, gap: 10 }}>
          <Icon
            name={estado === 'Pendiente' ? 'swap' : 'checkcircle'}
            size={80}
            color={palette.white}
          />
          <Text style={{ fontSize: fonts.Medium }}>{estado === 'Pendiente' ? 'Pedido pendiente' : 'Pedido completado'}</Text>
        </View>
        {estado === 'Pendiente'
          ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={completeDelivery}
            >
              {loading ? <ActivityIndicator color={palette.black} /> : <Text style={styles.buttonText}>Completar pedido</Text>}
            </TouchableOpacity>
            )
          : null}
      </BottomSheetModal>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.secondary,
    padding: 10,
    borderRadius: 13,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {},
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5
  },
  title: {
    fontSize: fonts.Medium,
    fontWeight: 'bold'
  },
  content: {
    fontSize: fonts.Tiny
  },
  status: {
    fontSize: fonts.VeryTiny,
    color: palette.white
  },
  addButton: {
    backgroundColor: palette.complementary1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13
  },
  buttonText: {
    fontSize: fonts.Medium,
    color: palette.white
  }
})
