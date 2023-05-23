import { PixelRatio } from 'react-native'

export const palette = {
  primary: '#1F1D2B',
  secondary: '#675BEF',
  auxiliar: '#5E517C',
  complementary1: '#FB4DA4',
  complementary2: '#C998F1',
  white: '#FFFFFF',
  yellow: '#F9D42E',
  error: 'red'
}

export const fonts = {
  Big: 24 / PixelRatio.getFontScale(),
  Medium: 18 / PixelRatio.getFontScale(),
  Small: 14 / PixelRatio.getFontScale(),
  Tiny: 12 / PixelRatio.getFontScale()
}
