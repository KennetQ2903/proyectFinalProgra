import { createSlice } from '@reduxjs/toolkit'
import { DB } from '../../types.global'
const initialState: DB = {
  Auth: false,
  Clientes: [],
  Repartidores: [],
  Stock: [],
  Usuarios: [],
  Vehiculos: [],
  Pedidos: []
}
export const configDB = createSlice({
  name: 'configDB',
  initialState,
  reducers: {
    addClients: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Clientes: payload
      }
    },
    addRepartidores: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Repartidores: payload
      }
    },
    addStock: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Stock: payload
      }
    },
    addDelivery: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Pedidos: payload
      }
    },
    addUsers: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Usuarios: payload
      }
    },
    addVehicles: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Vehiculos: payload
      }
    },
    authenticate: (state, action) => {
      return {
        ...state,
        Auth: action.payload
      }
    },
    resetDB: () => initialState
  }
})

export const {
  authenticate,
  addClients,
  addRepartidores,
  addStock,
  addUsers,
  addVehicles,
  addDelivery,
  resetDB
} = configDB.actions

export default configDB.reducer
