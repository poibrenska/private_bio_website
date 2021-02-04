import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tabs: MenuItem[];

  ngOnInit(): void {
    this.tabs = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { label: 'Education', icon: 'pi pi-fw pi-pencil', routerLink: ['/education'] },
      { label: 'Work Experience', icon: 'pi pi-id-card', routerLink: ['/experience'] },
      { label: 'Professional Skills', icon: 'pi pi-id-card', routerLink: ['/skills'] },
      { label: 'Hobbies', icon: 'pi pi-star', routerLink: ['/hobbies'] },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: ['/contact'] }
    ];
  }
}
