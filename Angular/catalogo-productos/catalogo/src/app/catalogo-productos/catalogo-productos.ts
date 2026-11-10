import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';

@Component({
  imports: [TarjetaProducto],
  selector: 'app-catalogo-productos',
  styleUrl: './catalogo-productos.css',
  templateUrl: './catalogo-productos.html',
})
export class CatalogoProductos {
  @Input() productos: Producto[] = [];
  @Output() productoAnadido = new EventEmitter<string>();

  reenviarProducto(nombre: string): void {
    this.productoAnadido.emit(nombre);
  }
}
