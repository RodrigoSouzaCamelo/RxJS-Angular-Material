import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable, concat, interval, last, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercent = 0;
  public queryValue = 0;
  public queryMode: ProgressBarMode = 'indeterminate';

  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(500, 95)
      .subscribe(x => this.loadingPercent = x);

      concat(
        interval(5000)
        .pipe(
          take(1),
          tap(_ => this.queryMode = 'determinate')
        ),
        this.loadingProgress(500, 100)
      ).subscribe(x => this.queryValue = x);
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed)
      .pipe(
        map(i => i * 5),
        takeWhile(i => i < takeUntil)
      );
  }

}
