import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  imports: [CurrencyPipe, NgClass],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {
  @Input() nombre: string = "";
  @Input() precio: number = 0;
  @Input() disponible!: boolean;
  
  @Output() productoAnadido = new EventEmitter<string>();

  addProducto(nombre: string): void {
    this.productoAnadido.emit(nombre);
  }
}
