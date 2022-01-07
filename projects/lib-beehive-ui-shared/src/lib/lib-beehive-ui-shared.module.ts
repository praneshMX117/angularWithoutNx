import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentIdentifierModule } from './features/component-identifier';
import { MenusModule } from './features/menus/menus.module';


@NgModule({
  declarations: [
  ],
  imports: [ CommonModule , RouterModule, ComponentIdentifierModule, MenusModule
  ],
  exports: [
    ComponentIdentifierModule, MenusModule
  ]
})
export class LibBeehiveUISharedModule { }
