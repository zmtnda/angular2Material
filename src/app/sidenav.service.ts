import { Injectable } from '@angular/core';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';
@Injectable()
export class SidenavService {
    private sidenav: MdSidenav;

    public setSideNav(sidenav: MdSidenav){
        this.sidenav = sidenav;
    }

    public toggle(isOpen?: boolean){
        return this.sidenav.toggle(isOpen);
    }
//   getHeroes(): Promise<Hero[]>{
// 	  return Promise.resolve(HEROES);

// 	  }
//   getHero(id: number): Promise<Hero> {
//     return this.getHeroes()
//                .then(heroes => heroes.find(hero => hero.id === id));
//   }

}
