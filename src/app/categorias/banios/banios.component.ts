import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-banios',
  templateUrl: './banios.component.html',
  styleUrls: ['./banios.component.css']
})
export class BaniosComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}
}
