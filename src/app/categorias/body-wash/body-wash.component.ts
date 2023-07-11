import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdCompleto } from 'src/app/interfaces/prod-completo.interface';
import { pruebaMysql } from 'src/app/interfaces/prueba-mysql.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProdVideoService } from 'src/app/services/prod-video.service';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body-wash',
  templateUrl: './body-wash.component.html',
  styleUrls: ['./body-wash.component.css']
})
export class BodyWashComponent {
  carrito: pruebaMysql[] = [];
  carritoVisible = false;
  producto: ProdCompleto;

  constructor(
    private router:Router,
    public prodServi: ProdVideoService,
    public pruebas1: PruebaMysqlService,
    private carritoService: CartService
    ){}


      /* Carrito de Compras */
      agregarAlCarrito(producto1: pruebaMysql): void {
        this.carritoService.agregarProducto(producto1);
        this.carrito = this.carritoService.obtenerProductos();
         // Abrir la alerta Swal después de medio segundos
         setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: 'Se agrego al carrito.'
          });
        }, 100);
        // Cerrar automáticamente la alerta después de 2 segundos adicionales
        setTimeout(function() {
          Swal.close();
        }, 1500);
      }
      /* Ver carrito */
      verCarrito(): void {
        this.carritoVisible = true;
      }

      eliminarDelCarrito(index: number): void {
        this.carritoService.eliminarProducto(index);
        this.carrito = this.carritoService.obtenerProductos();
      }
    
      vaciarCarrito(): void {
        this.carritoService.vaciarCarrito();
        this.carrito = this.carritoService.obtenerProductos();
      }

      /* orden de compra */
      finalizarCompra(): void {
      //aqui deberiamos de tener una funcion para enviar los datos a la base

        const productosCarrito = this.carritoService.obtenerProductos();

      // Navegar a la página de finalizar compra y pasar los productos como parámetro
        this.router.navigate(['/order'], { state: { productos: productosCarrito } });

        // vaciar carrito al hacer click al finalizar compra
        /* this.carritoService.vaciarCarrito(); */
      }



}
