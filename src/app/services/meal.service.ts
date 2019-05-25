import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meal} from '../models/meal.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private serviceUrl = 'http://localhost:8081/ComidasComoEnCasa/api/meals';
  constructor(private http: HttpClient) {}
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.serviceUrl);
  }
  postMeal(meal): Observable<Meal> {
    return this.http.post<Meal>(this.serviceUrl, meal);
  }
}
