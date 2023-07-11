import {Component} from '@angular/core';
import {InfoPaginaService} from './services/info-pagina.service';
import {ProductosService} from './services/productos.service';
import { PruebaMysqlService } from './services/prueba-mysql.service';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
showHeader = true;

  constructor(
    public _infoPaginaService: InfoPaginaService, 
    public productosService: ProductosService, 
    public pruebaMysql: PruebaMysqlService,
    private viewportScroller: ViewportScroller,
    private router: Router
    ) {}

    ngOnInit() {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        });
    }
}
