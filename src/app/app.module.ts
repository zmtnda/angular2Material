import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from '../ngmaterial.module';
import { AppRoutingModule }     from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PizzaComponent } from './pizza.component';
import { SidebarComponent} from './sidebar.component';
// import { DropdownComponent } from './dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    SidebarComponent
    // DropdownComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
