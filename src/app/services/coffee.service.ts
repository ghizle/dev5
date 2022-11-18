import { Injectable } from '@angular/core';
import { coffee } from '../model/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  
  Coffee: coffee[];
  coffee!: coffee;
  
  constructor() { 

    this.Coffee= [ 
      {idcoffee : 1, nomcoffee : "chicoree", prixcoffee: 5.200, dateCreation : new Date("01/14/2011")},
      {idcoffee : 2, nomcoffee :"niscofee", prixcoffee :3000, dateCreation : new Date("12/17/2010")},
      {idcoffee : 3, nomcoffee :"ricoree", prixcoffee : 4000, dateCreation : new Date("02/20/2020")}
    
    ];
  }
  listecoffee():coffee[]{
    return this.Coffee;

  }

  ajoutercoffee(coffee : coffee){
    this.Coffee.push(coffee);
  }
  supprimercoffee( coff: coffee){
    //supprimer le coffee coff du tableau coffees
    const index = this.Coffee.indexOf(coff, 0);
    if (index > -1) {
    this.Coffee.splice(index, 1);
    }
    //ou Bien
    /* this.coffee.forEach((cur, index) => {
    if(coffee.idcoffee === cur.idcoffee) {
    this.coffee.splice(index, 1);
    }
    }); */
    }
    consultercoffee(id:number): coffee{
     return this.coffee = this.Coffee.find(c=>c.idcoffee == id)!;
      //return this.coffee;
    }
updatecoffee(c:coffee)
{
// console.log(p);
this.supprimercoffee(c);
this.ajoutercoffee(c);
this.triercoffee();
}
triercoffee(){
  this.Coffee = this.Coffee.sort((n1,n2) => {
  if (n1.idcoffee > n2.idcoffee) {
  return 1;
  }
  if (n1.idcoffee < n2.idcoffee) {
  return -1;
  }
  return 0;
  });
  }
}
