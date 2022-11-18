import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { UpdateCoffeeComponent } from './update-coffee/update-coffee.component';

const routes: Routes = [{path : "coffee", component: CoffeeComponent},
                        {path : "add-coffee", component: AddCoffeeComponent},
                        {path : "updatecoffee/:id", component : UpdateCoffeeComponent},
                        {path: "", redirectTo: "coffee", pathMatch: "full"},
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
