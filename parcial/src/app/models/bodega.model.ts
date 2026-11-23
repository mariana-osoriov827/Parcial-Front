import { Producto } from './producto.model';

// id, nombre, ubicacion
// Relación: 1 → N
export interface Bodega {
  id?: number;
  nombre: string;
  ubicacion: string;
  productos?: Producto[];
}
