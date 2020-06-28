import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { PaginaInicialRoutingModule } from './pagina-inicial/paginaInicial-routing.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    PaginaInicialRoutingModule,
    PaginaInicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
