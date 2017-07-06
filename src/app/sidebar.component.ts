import { Component, OnInit, ViewChild } from '@angular/core';
// import { DropdownComponent } from './dropdown.component';
import { LinkComponent } from './link.component';
import { SidenavService } from './sidenav.service';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

@Component({
  selector: 'sidebar',
  templateUrl: `./sidebar.component.html`,
  providers: [SidenavService]
})
export class SidebarComponent implements OnInit{
    @ViewChild('sidenav') public sidenav: MdSidenav;
    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    constructor(
        private sidenavService: SidenavService) { }

    ngOnInit(): void {
        this.getSideNav();
        //   .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    getSideNav(): void {
        // this.sidenavService.getSideNav().then(heroes => this.heroes = heroes);
        this.sidenavService.setSideNav(this.sidenav);

    }
    private change(value: any) {
        console.log('Selected value is: ', value);
    }
    
        
}