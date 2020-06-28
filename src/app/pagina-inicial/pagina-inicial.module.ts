import { PaginaInicialComponent } from './pagina-inicial.component';
import { PaginaInicialRoutingModule } from './paginaInicial-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports:  [
    CommonModule,
    PaginaInicialRoutingModule
  ],
  exports: [
    PaginaInicialComponent
  ],
  declarations: [
    PaginaInicialComponent
  ],
  providers: [
  ],
})
export class PaginaInicialModule { }
