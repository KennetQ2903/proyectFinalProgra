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
  cliente: yup
    .number()
    .typeError('Ingrese un CUI valido')
    .required('Ingrese un CUI valido'),
  origen: yup.string().required('Ingrese un origen'),
  destino: yup.string().required('Ingrese un destino')
})

export const PedidosForm: FC<Props> = ({ handleValues }) => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      cliente: '',
      repartidor: '1234',
      origen: '',
      destino: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: fonts.Big, textAlign: 'center', marginVertical: 10 }}>Agregar Pedido</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='CUI del Cliente'
              returnKeyType='done'
              keyboardType='numeric'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='cliente'
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
              placeholder='Origen del pedido'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='origen'
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
              placeholder='Destino del pedido'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='destino'
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
