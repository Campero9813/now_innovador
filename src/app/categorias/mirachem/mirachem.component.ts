import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-mirachem',
  templateUrl: './mirachem.component.html',
  styleUrls: ['./mirachem.component.css']
})
export class MirachemComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}

    goBack() {
      window.history.back();
    }
}
