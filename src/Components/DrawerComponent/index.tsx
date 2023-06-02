import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import { memo, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'

import { palette } from '../../Config/theme'
import { resetDB } from '../../Redux/reducer'
import { ReduxStore } from '../../Redux/store'

const DeliveryMenuItem = memo(function DeliveryMenuItem () {
  const deliverysCount = useSelector((state: ReduxStore) => state.configDB.Pedidos.filter(p => p.estado === 'Pendiente').length)
  return (
    <View style={styles.deliveryContainer}>
      <Text style={styles.title}>Pedidos</Text>
      <View style={styles.bubble}>
        <Text style={styles.title}>{deliverysCount > 99 ? '99+' : deliverysCount}</Text>
      </View>
    </View>
  )
})
export default function DrawerComponent ({
  navigation,
  state
}: DrawerContentComponentProps) {
  const dispatch = useDispatch()
  const logout = useCallback(() => {
    dispatch(resetDB())
  }, [])
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: palette.primary }}
    >
      <DrawerItem
        focused={state.index === 0}
        label='Usuarios'
        onPress={() => navigation.navigate('Usuarios')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='user' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        focused={state.index === 1}
        label={() => <DeliveryMenuItem />}
        onPress={() => navigation.navigate('Pedidos')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='swap' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        focused={state.index === 2}
        label='Repartidores'
        onPress={() => navigation.navigate('Repartidores')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='team' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        focused={state.index === 3}
        label='Vehiculos'
        onPress={() => navigation.navigate('Vehiculos')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='rocket1' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        focused={state.index === 4}
        label='Clientes'
        onPress={() => navigation.navigate('Clientes')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='contacts' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        focused={state.index === 5}
        label='Reportes'
        onPress={() => navigation.navigate('Reportes')}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='linechart' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
      <DrawerItem
        label='Cerrar Sesión'
        onPress={logout}
        activeBackgroundColor={palette.secondary}
        activeTintColor={palette.white}
        labelStyle={{
          color: palette.white
        }}
        inactiveBackgroundColor={palette.primary}
        icon={({ color, size }) => (<Icon name='logout' size={size} color={color} />)}
        inactiveTintColor={palette.white}
        style={{
          borderRadius: 13
        }}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    color: palette.white,
    fontWeight: 'bold'
  },
  bubble: {
    backgroundColor: palette.complementary1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: 'center'
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
