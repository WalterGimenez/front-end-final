import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaErrorComponent } from './component/pagina-error/pagina-error.component';
import { ApLogoComponent } from './component/ap-logo/ap-logo.component';
import { RedesComponent } from './component/redes/redes.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaErrorComponent,
    ApLogoComponent,
    RedesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
