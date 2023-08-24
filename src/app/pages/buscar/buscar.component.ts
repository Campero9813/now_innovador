import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { CartService } from 'src/app/services/cart.service';

import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  carrito: productosMysql[] = [];
  carritoVisible = false;

  constructor (private route: ActivatedRoute,
    private router: Router,
    public pruebas1: ProductosService,

    private carritoService: CartService) {
      this.carrito = this.carritoService.obtenerProductos();
  }

  ngOnInit(){
    this.route.params.subscribe( params => {
      //console.log(params['termino']);

      this.pruebas1.buscarProd(params['termino']);
    });
  }


  /* Carrito de Compras */
  agregarAlCarrito(producto1: productosMysql): void {
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
    // Cerrar automáticamente la alerta después de 1.5 segundos adicionales
    setTimeout(function() {
      Swal.close();
    }, 2000);
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
