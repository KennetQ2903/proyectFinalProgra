import { FC } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { fonts, palette } from '../../Config/theme'
import { Vehiculo } from '../../../types.global'

export const VehiculoItem: FC<Vehiculo> = ({ color, marca, modelo, placa, year }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{placa}</Text>
      <Text style={styles.content}>Marca: {marca}</Text>
      <Text style={styles.content}>Modelo: {modelo}</Text>
      <Text style={styles.content}>Año: {year}</Text>
      <Text style={styles.content}>Color: {color}</Text>
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
