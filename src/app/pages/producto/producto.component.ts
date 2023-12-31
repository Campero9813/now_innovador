import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdVideoService} from '../../services/prod-video.service';
import {ProdCompleto} from '../../interfaces/prod-completo.interface';
import { productosMysql } from '../../interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {

    carrito: productosMysql[] = [];
    carritoVisible = false;

    @ViewChild('modal') modal: ElementRef;
    modalVisible = false;
  imageUrl: string;


    producto: productosMysql;
    id: string;
    imagenId: number;
    imagenSrc: string;
    mostrarModal: boolean = false;


    constructor(
        private router:Router,
        private route: ActivatedRoute,
        public productosMysql: ProductosService,
        private carritoService: CartService) {
            this.carrito = this.carritoService.obtenerProductos();
        }

        mostrar10L = true; // Inicialmente mostrar el primer template

        toggleTemplateA() {
          this.mostrar10L = true;
        }

        toggleTemplateB() {
          this.mostrar10L = false;
        }


    ngOnInit() {
        this.route.params.subscribe((parametros) => {
            console.log(parametros['id']);

            this.productosMysql.getProdPrueba(parametros['id']).subscribe((productosMysql: productosMysql) => {
                this.id = parametros['id'];
                console.log('Se imprime',productosMysql);
                this.producto = productosMysql;
            });
        });
    }

    goBack() {
      window.history.back();
    }


    mostrarImagen(imageUrl: string, foto: number) {
        /* console.log("Hola si estoy intentando abrir"); */
        let imgen = document.querySelectorAll('.imagen');
        /* console.log(imgen[foto].getAttribute("src")); */
        let imagen = imgen[foto].getAttribute("src")!;

        this.imageUrl = imagen;
        /* console.log(imageUrl); */
        this.modalVisible = true;
    }

    cerrarModal() {
        this.modalVisible = false;
        /* this.modal.nativeElement.style.display = 'none'; */
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
