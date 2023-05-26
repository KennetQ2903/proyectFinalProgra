import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl } from 'react-native'
import { Usuario } from '../../../../../../types.global'
import { UserItem } from '../../../../../Components/UserItem'
import { palette } from '../../../../../Config/theme'

export const UserList = memo(function UserList ({
  data,
  loading = false,
  onRefresh
}: {
    data: Usuario[],
    loading: boolean,
    onRefresh(): Promise<void>
}) {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Usuario}) => (
    <UserItem {...item} />
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
        placeholder='Buscar Usuario por Nombre'
      />
      <FlatList
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </>
  )
})
