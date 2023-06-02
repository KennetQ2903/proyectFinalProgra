import { memo, useCallback, useState } from 'react'
import { FlatList, TextInput, RefreshControl, StyleSheet, View } from 'react-native'
import { Delivery } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import { EmptyList } from '../../../../../Components/EmptyList'
import { DeliveryItem } from '../../../../../Components/DeliveryItem'

export const PedidosList = memo(function PedidosList ({
  data,
  loading = false,
  onRefresh
}: {
    data: Delivery[],
    loading: boolean,
    onRefresh(): Promise<void>
}) {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Delivery}) => (
    <DeliveryItem delivery={item} handleUpdate={onRefresh} />
  ), [])
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholder='Buscar Peidido por ID'
      />
      <FlatList
        data={query.length ? data.filter(c => c.id?.toString().toLowerCase().includes(query.toLowerCase())) : data}
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
  },
  input: {
    backgroundColor: palette.auxiliar,
    padding: 10,
    borderRadius: 13,
    marginVertical: 10
  }
})
