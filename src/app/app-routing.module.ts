import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component';
import {ProductoComponent} from './pages/producto/producto.component';
import {NosotrosComponent} from './pages/nosotros/nosotros.component';
import {BuscarComponent} from './pages/buscar/buscar.component';
import { PruebaListarMysqlComponent } from './pages/prueba-listar-mysql/prueba-listar-mysql.component';
import { PruebaEditarProdComponent } from './pages/prueba-editar-prod/prueba-editar-prod.component';
import { BolsaTrabajoComponent } from './pages/bolsa-trabajo/bolsa-trabajo.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
/* Componentes Categorias */
import { BodyWashComponent } from './categorias/body-wash/body-wash.component';
import { BodyMistComponent } from './categorias/body-mist/body-mist.component';
import { HandSoapComponent } from './categorias/hand-soap/hand-soap.component';

/* Componentes CRUD */
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
import { AdminInicioComponent } from './pages/admin-inicio/admin-inicio.component';

/* Componentes Carrito, Envio, Pago */
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DirEnvioComponent } from './pages/dir-envio/dir-envio.component';
import { ResumenComprasComponent } from './pages/resumen-compras/resumen-compras.component';





const routes: Routes = [
    {path: 'inicio', component: InicioComponent},

    /* Rutas Carrito, Envio, Compra */
    {path: 'order', component: CheckoutComponent},
    {path: 'envio', component: DirEnvioComponent},
    {path: 'resumen', component: ResumenComprasComponent},

    /* Rutas Categorias */
    {path: 'body-wash', component: BodyWashComponent},
    {path: 'body-mist', component: BodyMistComponent},
    {path: 'hand-soap', component: HandSoapComponent},

    {path: 'bolsa-trabajo', component: BolsaTrabajoComponent},

    /* Crud */
    {path: 'listado-prueba', component: PruebaListarMysqlComponent},
    {path: 'ingresar-producto', component: IngresarProductoComponent},
    {path: 'prueba-editar-prod/:id', component: PruebaEditarProdComponent},

    /* Admin */
    {path: 'admin', component: AdminInicioComponent},
    
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'sucursales', component: SucursalesComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: 'producto/:id', component: ProductoComponent},
    {path: 'buscar/:termino', component: BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
