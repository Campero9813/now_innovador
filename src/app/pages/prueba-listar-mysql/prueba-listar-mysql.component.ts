import { Component } from '@angular/core';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-prueba-listar-mysql',
  templateUrl: './prueba-listar-mysql.component.html',
  styleUrls: ['./prueba-listar-mysql.component.css']
})
export class PruebaListarMysqlComponent {

  constructor( public pruebaMysql: PruebaMysqlService){ }

}
