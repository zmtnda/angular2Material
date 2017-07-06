import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '../home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }