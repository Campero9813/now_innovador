import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.component.html',
  styleUrls: ['./pisos.component.css']
})
export class PisosComponent {
  constructor(
    private router:Router,
    public prodsNow: ProductosService,
    private renderer: Renderer2
    ){}

    ngAfterViewInit() {
      this.animationInit();
    }

    goBack() {
      window.history.back();
    }

    animationInit(){
      const elements = document.querySelectorAll('.has-animation');

      elements.forEach((element) => {
      const delay = parseInt(element.getAttribute('data-delay') || '0', 10);

      setTimeout(() => {
        this.renderer.addClass(element, 'animate-in');
      }, delay);
    });
    }
    /* animationInit(){
      document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.has-animation');

        elements.forEach(function(element) {
          const delay = parseInt(element.getAttribute('data-delay') || '0', 10);

          setTimeout(function() {
            element.classList.add('animate-in');
          }, delay);
        });
      });
    } */


}
