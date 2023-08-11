import { CommonModule } from '@angular/common';
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
import { CuidadoRopaComponent } from './categorias/cuidado-ropa/cuidado-ropa.component';
import { LimpiadoresPisosComponent } from './categorias/limpiadores-pisos/limpiadores-pisos.component';
import { LimpiadoresSuperficiesComponent } from './categorias/limpiadores-superficies/limpiadores-superficies.component';
import { LimpiadoresEspecializadosComponent } from './categorias/limpiadores-especializados/limpiadores-especializados.component';
import { MirachemComponent } from './categorias/mirachem/mirachem.component';
import { SubMenuComponent } from './shared/sub-menu/sub-menu.component';

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
        GuardarProductoComponent,
        IngresarProductoComponent,
        AdminInicioComponent,
        AdminComponent,
        LoginComponent,
        HeaderNewComponent,
        CheckoutComponent,
        DirEnvioComponent,
        ResumenComprasComponent,
        CuidadoRopaComponent,
        LimpiadoresPisosComponent,
        LimpiadoresSuperficiesComponent,
        LimpiadoresEspecializadosComponent,
        MirachemComponent,
        SubMenuComponent
    ],
    imports: [
        CommonModule,
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
