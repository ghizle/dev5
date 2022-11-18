import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { FormsModule } from '@angular/forms';
import { UpdateCoffeeComponent } from './update-coffee/update-coffee.component';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    AddCoffeeComponent,
    UpdateCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
