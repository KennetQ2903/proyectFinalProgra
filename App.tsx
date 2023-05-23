/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Views/Login'
import Home from './src/Views/Home'
import { palette } from './src/Config/theme'
import { AppNavigatorType } from './types.global'

const { Navigator, Screen } = createNativeStackNavigator<AppNavigatorType>()
// eslint-disable-next-line no-undef
function App (): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={palette.primary} barStyle='light-content' />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: palette.primary
            },
            animation: 'simple_push'
          }}
        >
          <Screen
            name='Login'
            component={Login}
            navigationKey='Login'
          />
          <Screen
            name='Home'
            component={Home}
            navigationKey='Home'
          />
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
