
import { Inject, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdCompleto } from 'src/app/interfaces/prod-completo.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { productosMysql } from '../../interfaces/productos.interface';
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

  carrito: productosMysql[] = [];
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
    public prodsNow: ProductosService,
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


}
