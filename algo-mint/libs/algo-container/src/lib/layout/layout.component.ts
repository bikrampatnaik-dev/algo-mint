import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'algo-mint-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  minimized = false;
  public navItems = [...navItems];

  toggleMinimize(e) {
    this.minimized = e;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
