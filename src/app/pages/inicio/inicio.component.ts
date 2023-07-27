
import { Inject, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
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
    public pruebas1: PruebaMysqlService,
    private carritoService: CartService,
    private renderer: Renderer2, 
    private el: ElementRef){
      
      this.carrito = this.carritoService.obtenerProductos();

    }




/* Galeria de imagenes */

ngOnInit() {
  // overlay para una transición más suave al modo de pantalla completa
  const $overlay = $('<div class="fotorama-overlay"></div>')
    .css({
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10001,
    })
    .fadeTo(0, 0)
    .hide()
    .appendTo("body");

  // tomar todos los bloques .fotorama
  $(".section-gallery").each( () => {
    const $gallery = $(this);
    // clonar y crear el fotorama
    const $fotorama = $(".fotorama-thumbs", $gallery)
      .clone()
      // .show()
      .css({ position: "absolute", left: -99999, top: -99999 })
      .appendTo("body")
      .fadeTo(0, 0)
      .fotorama();
    const fotorama = $fotorama.data("fotorama");

    for (let i = 0, l = fotorama.data.length; i < l; i++) {
      // preparar el id para usarlo en fotorama.show()
      fotorama.data[i].id = fotorama.data[i].img;
    }

    // asociar los clics
    $gallery.on("click", "a",  (e: Event) => {
      e.preventDefault();

      const $this = $(this);

      $overlay
        .show()
        .stop()
        .fadeTo(150, 1, function () {
          $fotorama.stop().fadeTo(150, 1);

          // llamadas a la API
          fotorama
            // mostrar el marco necesario
            .show({ index: $this.attr("href"), time: 0 })
            // abrir en pantalla completa
            .requestFullScreen();
        });
    });

    $fotorama.on("fotorama:fullscreenexit", function () {
      $fotorama.stop().fadeTo(0, 0);
      $overlay.stop().fadeTo(300, 0, function () {
        $overlay.hide();
      });
    });
  });
}


/* Fin Galeria de imagenes */



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
