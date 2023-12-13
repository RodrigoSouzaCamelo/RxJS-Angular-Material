import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterContentInit() {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (value) => {
        if(value.matches) {
          this.sideNav.mode = 'over';
          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      }
    })
  }
}
