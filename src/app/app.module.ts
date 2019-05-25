import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MealsComponent} from './meals/meals.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {MealService} from './services/meal.service';
import { AddComponent } from './meals/add/add.component';

const appRoutes: Routes = [
  {path: 'meals', component: MealsComponent},
  {path: 'meals/add', component: AddComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [
    MealService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
