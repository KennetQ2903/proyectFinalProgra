import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl } from 'react-native'
import { Repartidor } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import { RepartidorItem } from '../../../../../Components/RepartidorItem'

export const RepartidoresList = memo(function UserList ({
  data,
  loading = false,
  onRefresh
}: {
    data: Repartidor[],
    loading: boolean,
    onRefresh(): Promise<void>
}) {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Repartidor}) => (
    <RepartidorItem {...item} />
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
        placeholder='Buscar Repartidor por Nombre'
      />
      <FlatList
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </>
  )
})
