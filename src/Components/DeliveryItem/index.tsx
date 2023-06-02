import { FC } from 'react'

import { Delivery } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { fonts, palette } from '../../Config/theme'

export const ClientItem: FC<Delivery> = ({ destino, fechaInicio, origen, repartidor, cliente, estado, id, producto, vehiculo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id} {fechaInicio}</Text>
      <Text style={styles.content}>Destino: {destino}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.secondary,
    padding: 10,
    borderRadius: 13,
    marginVertical: 5
  },
  title: {
    fontSize: fonts.Medium,
    fontWeight: 'bold'
  },
  content: {
    fontSize: fonts.Tiny
  }
})
