import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, UpperCasePipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  title = 'Catálogo de Productos';

  // Copiado desde AppComponent para manejar la lista de productos
  fecha = new Date();

  // lista inicial de productos
  productos: string[] = [
    'Balón de fútbol',
    'Camiseta local',
    'Pantalones cortos',
    'Botines'
  ];

  nuevoProducto = '';
  mostrarLista = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto() {
    const nombre = this.nuevoProducto.trim();
    if (nombre) {
      this.productos.push(nombre);
      this.nuevoProducto = '';
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}
