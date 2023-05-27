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
  Placa: yup.string().required('Indique la placa del vehículo'),
  Marca: yup.string().required('Indique la marca del vehículo'),
  Modelo: yup.string().required('Indique el modelo del vehículo'),
  Color: yup.string().required('Indique el color del vehículo'),
  Year: yup.string().required('Indique el año del vehículo')
})

export const VehicleForm: FC<Props> = ({ handleValues }) => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      Placa: '',
      Marca: '',
      Modelo: '',
      Color: '',
      Year: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: fonts.Big, textAlign: 'center', marginVertical: 10 }}>Agregar Vehículo</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Modelo'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='Modelo'
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
              placeholder='Marca'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='Marca'
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
              placeholder='Placa'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='Placa'
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
              placeholder='Color'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='Color'
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
              placeholder='Año'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='Year'
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
