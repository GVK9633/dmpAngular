import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  toggleFlag = true;
  constructor() {
  }

  ngOnInit() {
    this.toggle();
  }
  toggle() {
    this.toggleFlag = !this.toggleFlag;
    if (this.toggleFlag) {
      this.openNav();
    }
    else {
      this.closeNav();
    }
  }
  openNav() {
    document.getElementById("mySideBar").style.width = "160px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  closeNav() {
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}
