import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-vidrios-y-superficies',
  templateUrl: './vidrios-y-superficies.component.html',
  styleUrls: ['./vidrios-y-superficies.component.css']
})
export class VidriosYSuperficiesComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService
  ){}
}
