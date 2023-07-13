import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pruebaMysql } from '../interfaces/prueba-mysql.interface';


@Injectable({
  providedIn: 'root'
})
export class PruebaMysqlService {
url='http://192.168.1.40//webservice_dev/NowImagenes/getConsulta/';
url_produccion='http://innovador.com.mx:8085/webservice_dev/lifeImagenes/getConsulta/';

url_prod='https://lifeproducts.mx/webservices/lifeproducts/ObtenerProductos/';

cargando = true;
prueba: pruebaMysql[]= [];
prodsFiltrados: pruebaMysql[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
    
    console.log("Ya se cargaron los productos");
  }
   cargarProductos(){

    return new Promise( (resolve, reject) => {
    //Cargamos todos los productos
    
          /* this.http.get<pruebaMysql[]>(`${this.url}}`) */
          this.http.get<pruebaMysql[]>(this.url, {responseType: "json"})
          .subscribe( (resp: pruebaMysql[]) => {
            //console.log(resp);
            this.prueba = resp;
            /* console.log(this.prueba); */
            setTimeout(() => {
              this.cargando = false;
            }, 5000);
          });
          
      });  
      
      
  }

  getProdPrueba(id: String){

    /* Esta es la ruta de dev ---> */   return this.http.get(`http://192.168.1.40/webservice_dev/nowImagenes/getConsulta/?id_producto=${ id }`);  
    /* Esta es la ruta de prod ---> */   /*  return this.http.get(`https://lifeproducts.mx/webservices/lifeproducts/ObtenerProductos/?id_producto=${ id }`);    */
    /* console.log("aqui viene el producto"); */
    setTimeout(() => {
      this.cargando=false;
    }, 5000);
  }

  buscarProd(termino: string){
    if (this.prueba.length === 0 ) {
      //Cargue Productos
      this.cargarProductos().then( ()=> {
        //Ejecutar despues de tener los productos
        //APlicamos Filtro
        this.filtrarProductos( termino );
      });
    }else{
      //Aplicar Filtro
      this.filtrarProductos( termino );
    }
  }
  private filtrarProductos( termino: string ){
    /* this.prodsFiltrados = this.prods.filter( prods => {
      return true;
    }); */

    //console.log(this.prods);
    this.prodsFiltrados = [];
    termino = termino.toLocaleLowerCase();

    this.prueba.forEach( producto => {
      if (producto.nombre_producto !== undefined && producto.categoria !== undefined ) {
        const tituloLower = producto.nombre_producto.toLocaleLowerCase();

        if (producto.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
          this.prodsFiltrados.push(producto);
        }

      }
    });

  }




}