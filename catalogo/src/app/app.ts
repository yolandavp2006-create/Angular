import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoProductos } from './catalogo-productos/catalogo-productos';
import { Producto } from './models/producto';

@Component({
  imports: [RouterOutlet, CatalogoProductos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogo');
  
  protected productos: Producto[] = [
    { id: 0, nombre: "Camiseta", precio: 12.99, disponible: true },
    { id: 1, nombre: "Pantalón", precio: 49.99, disponible: false },
    { id: 2, nombre: "Sudadera", precio: 19.99, disponible: true }
   ];

  protected carrito: string[] = [];
  
  public actualizarCarrito(nombre:string): string {
    const producto = this.productos.find(p => p.nombre === nombre);
    
    if (!producto) {
      return "Producto no encontrado";
    } else if (producto.disponible) {
      this.carrito.push(producto.nombre);
      return "Producto añadido";
    } else {
      return "Producto no disponible";
    }   
  }
   
}
