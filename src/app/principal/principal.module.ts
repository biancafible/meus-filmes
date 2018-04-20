import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TopoComponent, RodapeComponent],

  exports: [
    TopoComponent,
    RodapeComponent
  ]
})
export class PrincipalModule { }
