import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pruebaMysql } from 'src/app/interfaces/prueba-mysql.interface';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';

@Component({
  selector: 'app-prueba-editar-prod',
  templateUrl: './prueba-editar-prod.component.html',
  styleUrls: ['./prueba-editar-prod.component.css']
})
export class PruebaEditarProdComponent {

  pruebaProductos: pruebaMysql;
  id: String[];

  constructor(private route: ActivatedRoute, public pruebaMysql: PruebaMysqlService){}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
        //console.log(parametros['id']);

        this.pruebaMysql.getProdPrueba(parametros['id']).subscribe((pruebaIndividual: pruebaMysql) => {
            this.id = parametros['id'];
            console.log("Aqui esta el producto")
            console.log(pruebaIndividual);
            this.pruebaProductos = pruebaIndividual;
        });
    });
}


}
