import { Cliente, Repartidor, Stock, Usuario, Vehiculo } from '../../types.global'

export const clientes: Cliente[] = [
  {
    nombre: 'John',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  },
  {
    nombre: 'Maria',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  },
  {
    nombre: 'Marisol',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  },
  {
    nombre: 'Luis',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  },
  {
    nombre: 'Carlos',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  },
  {
    nombre: 'King',
    apellido: 'Doe',
    telefono: '123456789',
    direccion: '123 Main St',
    cui: 1234567890123
  }
]

export const vehiculos: Vehiculo[] = [
  {
    year: '2012',
    modelo: 'HASHBACK',
    marca: 'MAZDA',
    color: '#000',
    placa: '31PDAD92'
  }
]

export const repartidores: Repartidor[] = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    licencia: 'L123',
    telefono: '123456789',
    cui: '1234567890123'
  },
  {
    nombre: 'Juan',
    apellido: 'Perez',
    licencia: 'L123',
    telefono: '123456789',
    cui: '1234567890123'
  },
  {
    nombre: 'Juan',
    apellido: 'Perez',
    licencia: 'L123',
    telefono: '123456789',
    cui: '1234567890123'
  },
  {
    nombre: 'Juan',
    apellido: 'Perez',
    licencia: 'L123',
    telefono: '123456789',
    cui: '1234567890123'
  }
]

export const stock: Stock[] = [
  {
    correlativo: 1,
    fechaDeIngreso: '2023-05-15T22:24:48.6626412'
  },
  {
    correlativo: 2,
    fechaDeIngreso: '2023-05-15T22:24:49.1711448'
  },
  {
    correlativo: 3,
    fechaDeIngreso: '2023-05-15T22:24:49.5201903'
  },
  {
    correlativo: 4,
    fechaDeIngreso: '2023-05-15T22:24:49.8398495'
  },
  {
    correlativo: 5,
    fechaDeIngreso: '2023-05-15T22:24:50.1842541'
  },
  {
    correlativo: 6,
    fechaDeIngreso: '2023-05-15T22:24:50.4680527'
  },
  {
    correlativo: 7,
    fechaDeIngreso: '2023-05-15T22:24:50.7671668'
  },
  {
    correlativo: 8,
    fechaDeIngreso: '2023-05-15T22:24:51.0895083'
  },
  {
    correlativo: 9,
    fechaDeIngreso: '2023-05-15T22:24:51.5442326'
  },
  {
    correlativo: 10,
    fechaDeIngreso: '2023-05-15T22:24:51.845571'
  },
  {
    correlativo: 11,
    fechaDeIngreso: '2023-05-15T22:24:52.1584543'
  },
  {
    correlativo: 12,
    fechaDeIngreso: '2023-05-15T22:24:52.3978131'
  },
  {
    correlativo: 13,
    fechaDeIngreso: '2023-05-15T22:24:52.9077312'
  }
]

export const usuarios: Usuario[] = [
  {
    nombre: 'luis',
    apellido: 'dasda',
    password: '1234',
    id: 1
  }
]
