import { FC } from 'react'

import { Usuario } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { fonts, palette } from '../../Config/theme'

export const UserItem: FC<Usuario> = ({ apellido, id, nombre, password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID - {id}</Text>
      <Text style={styles.content}>{nombre} {apellido}</Text>
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
