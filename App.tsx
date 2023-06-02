/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Views/Login'
import Home from './src/Views/Home'
import { palette } from './src/Config/theme'
import { AppNavigatorType } from './types.global'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider, useSelector } from 'react-redux'
import { ReduxStore, persistor, store } from './src/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const { Navigator, Screen } = createNativeStackNavigator<AppNavigatorType>()
// eslint-disable-next-line no-undef

const Routes = () => {
  const auth = useSelector((state: ReduxStore) => state.configDB.Auth)
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: palette.primary
        },
        animation: 'simple_push'
      }}
    >
      {auth
        ? (
          <>
            <Screen
              name='Home'
              component={Home}
              navigationKey='Home'
            />
            <Screen
              name='Login'
              component={Login}
              navigationKey='Login'
            />
          </>
          )
        : (
          <Screen
            name='Login'
            component={Login}
            navigationKey='Login'
          />
          )}
    </Navigator>
  )
}
// eslint-disable-next-line no-undef
function App (): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={palette.primary} barStyle='light-content' />
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={rootViewStyles.container}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

const rootViewStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
