import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps
} from '@react-navigation/drawer'
import { palette } from '../../Config/theme'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { resetDB } from '../../Redux/reducer'
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
        label='Pedidos'
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
