import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-superficies',
  templateUrl: './superficies.component.html',
  styleUrls: ['./superficies.component.css']
})
export class SuperficiesComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}

    goBack() {
      window.history.back();
    }
}
