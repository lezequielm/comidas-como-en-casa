import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MealService} from '../services/meal.service';
import {Observable} from 'rxjs';
import {Meal} from '../models/meal.model';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  dataSource = new MealDataSource(this.mealService);
  displayedColumns = ['id', 'name', 'description', 'enabled'];
  constructor(private mealService: MealService) {

  }
  ngOnInit() {
  }

}

export class MealDataSource extends DataSource<any> {
  constructor(private userService: MealService) {
    super();
  }
  connect(): Observable<Meal[]> {
    return this.userService.getMeals();
  }
  disconnect() {}
}
