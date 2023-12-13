import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSmallScreen: boolean = false;

  get sideNavOpened() {
    return !this.isSmallScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterContentInit() {
    this.breakpointObserver.observe(['(max-width: 800px)'])
    .subscribe((res) => this.isSmallScreen = res.matches);
  }
}
