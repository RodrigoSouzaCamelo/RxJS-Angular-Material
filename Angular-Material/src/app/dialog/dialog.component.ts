import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog() {
    this.dialog.open(DialogModalComponent, {
      data: 'Bazinga!',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms'
    });
  }

}
