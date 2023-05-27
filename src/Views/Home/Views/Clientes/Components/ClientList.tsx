import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl, View, StyleSheet } from 'react-native'

import { Cliente } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import { ClientItem } from '../../../../../Components/ClientItem'
import { EmptyList } from '../../../../../Components/EmptyList'

export const ClientList = memo(function ClientList ({
  data,
  loading = false,
  onRefresh
}: {
    data: Cliente[],
    loading: boolean,
    onRefresh(): Promise<void>
}) {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Cliente}) => (
    <ClientItem {...item} />
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
        placeholder='Buscar Cliente por Nombre'
      />
      <FlatList
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
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
