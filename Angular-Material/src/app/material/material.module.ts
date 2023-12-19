import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatInputModule, MatListModule],
  providers: [
      {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'outline', floatLabel: 'always' }
      }
  ]
})
export class MaterialModule {}
