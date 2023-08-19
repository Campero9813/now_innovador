import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}

    goBack() {
      window.history.back();
    }
}
