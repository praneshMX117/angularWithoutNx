import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
  ,exports : [ MenusComponent ]
})
export class MenusModule { }
