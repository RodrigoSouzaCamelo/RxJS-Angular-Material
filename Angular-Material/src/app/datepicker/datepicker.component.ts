import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  //moment([2024, 1, 2])
  public startDate = moment();
  public minDate = moment().subtract(1, 'months');
  public maxDate = moment().add(1, 'months');

  constructor(private platform: Platform) { }

  ngOnInit(): void {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

}
