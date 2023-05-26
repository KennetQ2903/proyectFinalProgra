import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreenType } from '../../../types.global'
import DrawerComponent from '../../Components/DrawerComponent'
import { palette } from '../../Config/theme'
import Clientes from './Views/Clientes'
import Pedidos from './Views/Pedidos'
import Repartidores from './Views/Repartidores'
import Reportes from './Views/Reportes'
import Usuarios from './Views/Usuarios'
import Vehiculos from './Views/Vehiculos'
import { HomeScreens } from './types.home'
import { View } from 'react-native'

const { Navigator, Screen } = createDrawerNavigator<HomeScreens>()

export default function Home ({ navigation, route }: HomeScreenType) {
  return (
    <>
      <Navigator
        drawerContent={DrawerComponent}
        screenOptions={{
          sceneContainerStyle: {
            backgroundColor: palette.primary
          },
          headerBackground: () => <View style={{ backgroundColor: palette.primary }} />,
          headerTintColor: palette.white,
          swipeEdgeWidth: 50
        }}
      >
        <Screen
          name='Usuarios'
          component={Usuarios}
        />
        <Screen
          name='Pedidos'
          component={Pedidos}
        />
        <Screen
          name='Repartidores'
          component={Repartidores}
        />
        <Screen
          name='Vehiculos'
          component={Vehiculos}
        />
        <Screen
          name='Clientes'
          component={Clientes}
        />
        <Screen
          name='Reportes'
          component={Reportes}
        />
      </Navigator>
    </>
  )
}
