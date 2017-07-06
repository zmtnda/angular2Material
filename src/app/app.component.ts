import { Component } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { SidebarComponent} from './sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SidenavService]
})
export class AppComponent {
  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  constructor(
    private sidenavService: SidenavService
  ){}

  public toggleSidenav(){
    this.sidenavService.toggle().then(() => {});
  }
//    private change(value: any) {
//    console.log('Selected value is: ', value);
//  }
}