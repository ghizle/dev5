import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-coffee',
  templateUrl: './update-coffee.component.html',
  styleUrls: ['./update-coffee.component.css']
})
export class UpdateCoffeeComponent implements OnInit {
  currrentcoffee = new coffee();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currrentcoffee = this.coffeeService.consultercoffee(this.activatedRoute.snapshot. params['id']);
    console.log(this.currrentcoffee);
  }
  updatecoffee(){
    //console.log(this.currrentcoffee);
    this.coffeeService.updatecoffee(this.currrentcoffee);
    this.router.navigate(["coffee"]);
  }

}
