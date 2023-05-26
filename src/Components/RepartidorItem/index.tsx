import { FC } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { fonts, palette } from '../../Config/theme'
import { Repartidor } from '../../../types.global'

export const RepartidorItem: FC<Repartidor> = ({ apellido, cui, licencia, nombre, telefono }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre} {apellido}</Text>
      <Text style={styles.content}>Licencia: {licencia}</Text>
      <Text style={styles.content}>Telefono: {telefono}</Text>
      <Text style={styles.content}>CUI: {cui}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.secondary,
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 10,
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
