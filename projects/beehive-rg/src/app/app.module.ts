import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentIdentifierModule } from "lib-beehive-ui-shared";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentIdentifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
