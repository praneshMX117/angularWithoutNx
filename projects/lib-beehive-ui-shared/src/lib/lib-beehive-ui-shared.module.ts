import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentIdentifierModule } from './features/component-identifier';


@NgModule({
  declarations: [
  ],
  imports: [ CommonModule , RouterModule, ComponentIdentifierModule
  ],
  exports: [
    ComponentIdentifierModule
  ]
})
export class LibBeehiveUISharedModule { }
