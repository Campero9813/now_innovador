import {Component, ElementRef, HostListener} from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import {InfoPaginaService} from 'src/app/services/info-pagina.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor(public infoPaginaService: InfoPaginaService,
                private router:Router,
                private elementRef: ElementRef ) {}

    buscarProducto( termino: string){
        console.log(termino);
        if(termino.length < 1){
            return;
        }
        this.router.navigate(['/buscar', termino]);
    }

    menuVisible = false;

    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
      // Obtiene el elemento en el que se hizo clic
      const targetElement = event.target as HTMLElement;
  
      // Verifica si el clic fue dentro del menú o su elemento de activación
      const clickedInsideMenu = this.elementRef.nativeElement.contains(targetElement);
  
      if (!clickedInsideMenu) {
        // Cierra el menú si el clic fue fuera del mismo
        this.menuVisible = false;
      }
    }
}
