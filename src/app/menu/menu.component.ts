import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
