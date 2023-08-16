import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-alfombras',
  templateUrl: './alfombras.component.html',
  styleUrls: ['./alfombras.component.css']
})
export class AlfombrasComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){}
}
