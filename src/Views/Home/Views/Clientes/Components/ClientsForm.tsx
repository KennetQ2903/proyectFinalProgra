import { FC } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { fonts, palette } from '../../../../../Config/theme'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
    handleValues(values: any): void
    closeModal(): void
}

const validator = yup.object().shape({
  CUI: yup
    .number()
    .typeError('Ingrese un CUI valido')
    .required('Ingrese un CUI valido'),
  nombre: yup.string().required('Ingrese un nombre'),
  apellido: yup.string().required('Ingrese un apellido'),
  telefono: yup.string().required('Ingrese un telefono'),
  direccion: yup.string().required('Ingrese una direccion')
})

export const ClientsForm: FC<Props> = ({ handleValues, closeModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      CUI: '',
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  return (
    <ScrollView
      style={{
        backgroundColor: palette.primary
      }}
    >
      <Text style={{ fontSize: fonts.Big, textAlign: 'center' }}>Agregar Cliente</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='CUI/DPI'
              returnKeyType='done'
              keyboardType='numeric'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='CUI'
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
              placeholder='Telefono'
              returnKeyType='done'
              keyboardType='phone-pad'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='telefono'
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
              placeholder='Direccion'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='direccion'
      />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={closeModal}
      >
        <Text>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSubmit(handleValues)}
      >
        <Text>Agregar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: palette.complementary1,
    margin: 10,
    padding: 10
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
    borderRadius: 5
  },
  error: {
    color: palette.error,
    fontSize: fonts.Small,
    marginHorizontal: 15
  }
})
