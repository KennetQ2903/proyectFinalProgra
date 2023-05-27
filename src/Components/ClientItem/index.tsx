import { FC } from 'react'

import { Cliente } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { fonts, palette } from '../../Config/theme'

export const ClientItem: FC<Cliente> = ({ apellido, cui, direccion, nombre, telefono }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre} {apellido}</Text>
      <Text style={styles.content}>Direccion: {direccion}</Text>
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
