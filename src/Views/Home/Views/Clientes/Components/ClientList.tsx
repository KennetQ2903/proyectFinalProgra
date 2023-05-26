import { useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl } from 'react-native'

import { Cliente } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import { ClientItem } from '../../../../../Components/ClientItem'

export const ClientList = ({
  data,
  loading = false,
  onRefresh
}: {
    data: Cliente[],
    loading: boolean,
    onRefresh(): Promise<any>
}) => {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Cliente}) => (
    <ClientItem {...item} />
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
        placeholder='Buscar Cliente por Nombre'
      />
      <FlatList
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </>
  )
}
