import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-superficies',
  templateUrl: './superficies.component.html',
  styleUrls: ['./superficies.component.css']
})
export class SuperficiesComponent {
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
}
