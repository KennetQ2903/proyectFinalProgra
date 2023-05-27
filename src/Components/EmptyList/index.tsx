import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { fonts, palette } from '../../Config/theme'

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Icon
        name='search1'
        size={32}
        color={palette.auxiliar}
      />
      <Text style={styles.title}>Sin datos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.Medium,
    color: palette.auxiliar
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    gap: 5
  }
})
