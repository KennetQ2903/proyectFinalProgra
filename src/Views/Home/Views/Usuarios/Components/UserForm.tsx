import { yupResolver } from '@hookform/resolvers/yup'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as yup from 'yup'

import { fonts, palette } from '../../../../../Config/theme'

interface Props {
    handleValues(values: any): void
}

const validator = yup.object().shape({
  nombre: yup.string().required('Ingrese un nombre'),
  apellido: yup.string().required('Ingrese un apellido'),
  password: yup.string().required('Ingrese un contraseña')
})

export const UserForm: FC<Props> = ({ handleValues }) => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      password: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: fonts.Big, textAlign: 'center', marginVertical: 10 }}>Agregar Usuario</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Nombre'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
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
              style={styles.input}
              placeholder='Apellido'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='apellido'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Contraseña'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='password'
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSubmit(handleValues)}
      >
        {isSubmitting ? <ActivityIndicator size='small' color={palette.black} /> : <Text style={styles.buttonText}>Agregar</Text>}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    backgroundColor: palette.complementary1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13
  },
  buttonText: {
    fontSize: fonts.Medium,
    color: palette.white
  },
  closeButton: {
    backgroundColor: palette.complementary2,
    margin: 10,
    padding: 10
  },
  input: {
    backgroundColor: palette.auxiliar,
    color: palette.white,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 13
  },
  error: {
    color: palette.error,
    fontSize: fonts.Small,
    marginHorizontal: 15
  }
})
