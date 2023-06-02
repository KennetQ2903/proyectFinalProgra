import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, ActivityIndicator, Alert } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { LoginScreenType } from '../../../types.global'
import { fonts, palette } from '../../Config/theme'
import { loginForm } from './types.login'
import loginFormSchema from '../../Schemas/loginForm'
import { API_URL_PROD } from '../../Config/API'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../Redux/reducer'

const URL_AUTH = `${API_URL_PROD}/auth`
export default function Login ({ navigation, route }: LoginScreenType) {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      nombre: '',
      password: ''
    },
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(loginFormSchema)
  })
  const handleLogin = useCallback(async (form: loginForm) => {
    console.log('el formulario es: ', form)
    return globalThis.fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (res.status === 200) {
          dispatch(authenticate(true))
          navigation.replace('Home')
        }
        if (res.status === 401) {
          Alert.alert('Error', 'Usuario o contraseña incorrectos')
        }
      })
  }, [navigation])

  return (
    <View style={{ flex: 1, padding: 15, justifyContent: 'center' }}>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={{
                color: palette.white,
                borderRadius: 13,
                backgroundColor: palette.auxiliar,
                marginVertical: 15,
                paddingHorizontal: 15
              }}
              placeholder='Nombre de Usuario'
            />
            <Text style={{ color: palette.error, fontSize: fonts.Tiny }}>{error?.message}</Text>
          </>
        )}
        name='nombre'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={{
                color: palette.white,
                borderRadius: 13,
                backgroundColor: palette.auxiliar,
                marginVertical: 15,
                paddingHorizontal: 15
              }}
              placeholder='Contraseña'
            />
            <Text style={{ color: palette.error, fontSize: fonts.Tiny }}>{error?.message}</Text>
          </>
        )}
        name='password'
      />
      <TouchableOpacity style={[styles.button]} onPress={handleSubmit(handleLogin)}>
        {isSubmitting ? <ActivityIndicator color={palette.white} /> : <Text style={styles.buttonText}>Iniciar Sesión</Text>}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15
  },
  buttonText: {
    color: palette.white,
    textAlign: 'center',
    fontSize: fonts.Medium
  }
})
