import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ClarityModule, ClrAlert, ClrAlertModule, ClrIfOpen, ClrTooltipModule} from '@clr/angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { AlertAppComponent } from './alert-app/alert-app.component';
import {NgxCurrencyModule} from 'ngx-currency';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    PrincipalComponent,
    ProdutoComponent,
    CategoriaComponent,
    AdicionarProdutoComponent,
    AlertAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
