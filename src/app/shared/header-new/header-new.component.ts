import { Component, ElementRef, HostListener } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent {
  isTransparent = false;
  isSolid = false;
  isScrolled = false;

  constructor(public InfoPaginaService: InfoPaginaService,
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

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = (window.scrollY > 0);
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
