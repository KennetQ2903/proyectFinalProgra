import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppNavigatorType={
    Home: undefined
    Login: undefined
}

export type LoginScreenType = NativeStackScreenProps<AppNavigatorType, 'Login'>
export type HomeScreenType = NativeStackScreenProps<AppNavigatorType, 'Home'>

export interface User {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface Cliente {
    nombre: string
    apellido: string
    telefono: string
    direccion: string
    cui: number
}

export interface Usuario {
    nombre: string,
    apellido: string,
    password: string,
    id: number
}

export interface Vehiculo {
    year: string,
    modelo: string,
    marca: string,
    color: string,
    placa: string
}

export interface Repartidor {
    nombre: string,
    apellido: string,
    licencia: string,
    telefono: string,
    cui: string
}

export interface Stock {
    correlativo: number,
    fechaDeIngreso: string
}
