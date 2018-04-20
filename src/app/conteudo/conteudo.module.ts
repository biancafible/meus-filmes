import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';

import { FilmeService } from './filme.service';

 
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListaFilmesComponent, FilmeCardComponent],
  exports: [
    ListaFilmesComponent,
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
