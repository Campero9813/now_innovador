import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mirachem',
  templateUrl: './mirachem.component.html',
  styleUrls: ['./mirachem.component.css']
})
export class MirachemComponent {
  constructor(
    private router:Router,
    public prodsNow: ProductosService){}

    goBack() {
      window.history.back();
    }
}
