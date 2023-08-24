
import { Inject, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdVideoService } from 'src/app/services/prod-video.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ProdCompleto } from 'src/app/interfaces/prod-completo.interface';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';
import { pruebaMysql } from '../../interfaces/prueba-mysql.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


declare const $: any;

interface FotoramaData {
  img: string;
  id?: string;
  // Otros campos que puedan existir en el objeto 'data'.
}

interface Fotorama {
  data: FotoramaData[];
  // Otros campos o métodos que puedan existir en el objeto 'fotorama'.
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements AfterViewInit{

  private initialized: boolean = false

  animateTitle = false;
  animateImages = false;

  carrito: pruebaMysql[] = [];
  carritoVisible = false;


  limite: number = 73;
  txtAcortado: string = '';
  txtCompleto: string = '';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.acortarTexto();
    }, 1500);

  }
  acortarTexto(): void {
    /* console.log("pruebas");
    console.log(this.txtCompleto); */
    if (this.txtCompleto.length > this.limite) {
      this.txtAcortado = this.txtCompleto.substring(0, this.limite) + '...';
    } else {
      this.txtAcortado = this.txtCompleto;
    }
  }

  constructor(
    private router:Router,
    public productoService: ProductosService,
    public prodService: ProdVideoService,
    public prodsNow: PruebaMysqlService,
    private carritoService: CartService,
    private renderer: Renderer2,
    private elementRef: ElementRef){
      this.carrito = this.carritoService.obtenerProductos();
    }


    /* Animaciones Inicio */
        @HostListener('window:scroll', ['$event'])
        onWindowScroll() {
          this.checkScrollPosition();
        }

        checkScrollPosition() {
          if (!this.animateTitle && this.isScrolledIntoView('.titulo')) {
            this.animateTitle = true;
          }
          if (!this.animateImages && this.isScrolledIntoView('.imagenes')) {
            this.animateImages = true;
          }
        }

        isScrolledIntoView(selector: string): boolean {
          const element = document.querySelector(selector);
          if (!element) return false;

          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          return rect.top <= windowHeight && rect.bottom >= 0;
        }
    /* End Animaciones inicio */









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

      incrementarCantidad(producto: pruebaMysql): void {
        const productoExistente = this.carrito.find(p => p.id_producto === producto.id_producto);
        if (productoExistente) {
          productoExistente.cantidad!++;
        }
      }

      decrementarCantidad(producto: pruebaMysql): void {
        const productoExistente = this.carrito.find(p => p.id_producto === producto.id_producto);
        if (productoExistente) {
          if (productoExistente.cantidad! > 1 ) {
            productoExistente.cantidad!--;
          }else{
            const index = this.carrito.indexOf(productoExistente);
            this.carrito.splice(index, 1);
          }
      }
    }










}
