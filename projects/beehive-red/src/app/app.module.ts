import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibBeehiveUISharedModule } from "lib-beehive-ui-shared";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibBeehiveUISharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
