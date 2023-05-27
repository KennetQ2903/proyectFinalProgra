import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl, StyleSheet, View } from 'react-native'
import { palette } from '../../../../../Config/theme'
import { Vehiculo } from '../../../../../../types.global'
import { VehiculoItem } from '../../../../../Components/VehiculoItem'
import { EmptyList } from '../../../../../Components/EmptyList'

export const VehiculosList = memo(function UserList ({
  data,
  loading = false,
  onRefresh
}: {
    data: Vehiculo[],
    loading: boolean,
    onRefresh(): Promise<void>
}) {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Vehiculo}) => (
    <VehiculoItem {...item} />
  ), [])
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={{
          backgroundColor: palette.auxiliar,
          padding: 10,
          borderRadius: 13,
          marginVertical: 10
        }}
        placeholder='Buscar Vehiculos por placa'
      />
      <FlatList
        data={query.length ? data.filter(c => c.placa.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
