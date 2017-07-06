import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../ngmaterial.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    AngularMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
