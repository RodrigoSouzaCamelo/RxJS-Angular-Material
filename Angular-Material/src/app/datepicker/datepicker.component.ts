import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  public startDate: Date = new Date(Date.now());
  public minDate: Date = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 1, this.startDate.getDate())
  public maxDate: Date = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDate())

  constructor(private platform: Platform) { }

  ngOnInit(): void {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

}
