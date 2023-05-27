import { PixelRatio } from 'react-native'

export const palette = {
  primary: '#1F1D2B',
  secondary: '#675BEF',
  auxiliar: '#5E517C',
  complementary1: '#FB4DA4',
  complementary2: '#C998F1',
  white: '#FFFFFF',
  yellow: '#F9D42E',
  error: 'red',
  graygreen: '#222831'
}

export const fonts = {
  Big: 18 / PixelRatio.getFontScale(),
  Medium: 14 / PixelRatio.getFontScale(),
  Small: 12 / PixelRatio.getFontScale(),
  Tiny: 10 / PixelRatio.getFontScale()
}
