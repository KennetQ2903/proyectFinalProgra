import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl } from 'react-native'
import { palette } from '../../../../../Config/theme'
import { Vehiculo } from '../../../../../../types.global'
import { VehiculoItem } from '../../../../../Components/VehiculoItem'

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
    <>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={{
          backgroundColor: palette.auxiliar,
          padding: 10,
          borderRadius: 13,
          margin: 10
        }}
        placeholder='Buscar Vehiculos por placa'
      />
      <FlatList
        data={query.length ? data.filter(c => c.placa.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </>
  )
})
