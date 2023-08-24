import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productosMysql } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
url='http://192.168.1.40//webservice_dev/NowImagenes/getConsulta/';
url_produccion='http://innovador.com.mx:8085/webservice_dev/lifeImagenes/getConsulta/';

url_prod='https://lifeproducts.mx/webservices/lifeproducts/ObtenerProductos/';

cargando = true;
prueba: productosMysql[]= [];
prodsFiltrados: productosMysql[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();

    console.log("Ya se cargaron los productos");
  }
   cargarProductos(){

    return new Promise( (resolve, reject) => {
    //Cargamos todos los productos

          /* this.http.get<productosMysql[]>(`${this.url}}`) */
          this.http.get<productosMysql[]>(this.url, {responseType: "json"})
          .subscribe( (resp: productosMysql[]) => {
            /* console.log("los productos",resp); */
            this.prueba = resp;
            /* console.log(this.prueba); */
            setTimeout(() => {
              this.cargando = false;
            }, 5000);
          });

      });
  }

  getProdPrueba(id: String){
    /* console.log(id); */
    /* Esta es la ruta de dev ---> */   return this.http.get(`http://192.168.1.40/webservice_dev/NowImagenes/getConsulta/?id_producto=${ id }`);
    /* Esta es la ruta de prod ---> */   /*  return this.http.get(`https://lifeproducts.mx/webservices/lifeproducts/ObtenerProductos/?id_producto=${ id }`);    */
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
