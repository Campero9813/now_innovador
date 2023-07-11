import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../interfaces/producto.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: Producto[]= [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    //Leer Los productos
    this.http.get<Producto[]>('https://lifeproducts-cfa68-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {
      //console.log(resp);
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;  
      }, 5000);
    });
  }
  getProducto( id: String){
    return this.http.get(`https://lifeproducts-cfa68-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }


}
