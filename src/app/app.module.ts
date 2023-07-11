import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

//Rutas
import {AppRoutingModule} from './app-routing.module';

//Componentes
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {NosotrosComponent} from './pages/nosotros/nosotros.component';
import {ProductoComponent} from './pages/producto/producto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarCarritoComponent } from './buttons/agregar-carrito/agregar-carrito.component';
import { PruebaListarMysqlComponent } from './pages/prueba-listar-mysql/prueba-listar-mysql.component';
import { PruebaEditarProdComponent } from './pages/prueba-editar-prod/prueba-editar-prod.component';
import { CarritoDespComponent } from './buttons/carrito-desp/carrito-desp.component';
import { BolsaTrabajoComponent } from './pages/bolsa-trabajo/bolsa-trabajo.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { BodyMistComponent } from './categorias/body-mist/body-mist.component';
import { BodyWashComponent } from './categorias/body-wash/body-wash.component';
import { HandSoapComponent } from './categorias/hand-soap/hand-soap.component';
import { GuardarProductoComponent } from './buttons/guardar-producto/guardar-producto.component';
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
import { AdminInicioComponent } from './pages/admin-inicio/admin-inicio.component';
import { AdminComponent } from './shared/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HeaderNewComponent } from './shared/header-new/header-new.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DirEnvioComponent } from './pages/dir-envio/dir-envio.component';
import { ResumenComprasComponent } from './pages/resumen-compras/resumen-compras.component';

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        InicioComponent, 
        NosotrosComponent, 
        ProductoComponent, 
        BuscarComponent, 
        AgregarCarritoComponent, 
        PruebaListarMysqlComponent, 
        PruebaEditarProdComponent, 
        CarritoDespComponent, 
        BolsaTrabajoComponent, 
        SucursalesComponent, 
        ContactanosComponent, 
        BodyMistComponent, 
        BodyWashComponent, 
        HandSoapComponent, 
        GuardarProductoComponent, 
        IngresarProductoComponent,
        AdminInicioComponent,
        AdminComponent,
        LoginComponent,
        HeaderNewComponent,
        CheckoutComponent,
        DirEnvioComponent,
        ResumenComprasComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
