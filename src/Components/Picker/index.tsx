import { useRef } from 'react'
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { Text, TouchableOpacity } from 'react-native'
import { palette } from '../../Config/theme'
const snapPoints = ['40%', '40%', '80%']
export const Picker = () => {
  const modalRef = useRef<BottomSheetModal>(null)
  return (
    <>
      <TouchableOpacity onPress={() => modalRef.current?.present()}>
        <Text>AQUI</Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={modalRef}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        backgroundStyle={{
          backgroundColor: palette.graygreen
        }}
        handleIndicatorStyle={{
          backgroundColor: palette.white
        }}
      >
        <Text>HOLA</Text>
      </BottomSheetModal>
    </>
  )
}
