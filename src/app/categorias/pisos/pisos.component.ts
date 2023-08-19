import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.component.html',
  styleUrls: ['./pisos.component.css']
})
export class PisosComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}

    goBack() {
      window.history.back();
    }
}
