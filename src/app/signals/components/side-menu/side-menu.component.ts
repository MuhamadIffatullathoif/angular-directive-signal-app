import {Component, signal} from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    {title: 'Counter', router: 'counter'},
    {title: 'User', router: 'user-info'},
    {title: 'Mutation', router: 'properties'},
  ]);
  // public menuItems: MenuItem[] = [
  //   {title: 'Counter', router: 'counter'},
  //   {title: 'User', router: 'user-info'},
  //   {title: 'Mutation', router: 'properties'},
  // ]
}
