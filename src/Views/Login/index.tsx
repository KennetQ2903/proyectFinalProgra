import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { LoginScreenType } from '../../../types.global'
import { fonts, palette } from '../../Config/theme'
import { loginForm } from './types.login'
import loginFormSchema from '../../Schemas/loginForm'
export default function Login ({ navigation, route }: LoginScreenType) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(loginFormSchema)
  })
  const handleLogin = useCallback((form: loginForm) => {
    const { password, username } = form
    console.log('el formulario es: ', form)
    if (username === 'luis' && password === '1234') {
      navigation.replace('Home')
    }
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
        name='username'
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
        <Text style={[styles.buttonText]}>
          Iniciar Sesión
        </Text>
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
