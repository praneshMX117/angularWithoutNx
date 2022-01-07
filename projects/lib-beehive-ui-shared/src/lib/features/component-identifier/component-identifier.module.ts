import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentIdentifierComponent } from './component-identifier.component';

@NgModule({
  declarations: [
    ComponentIdentifierComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ ComponentIdentifierComponent ]
})
export class ComponentIdentifierModule { }
