import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatRippleModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule
  ]
})
export class XcodematcompModule { }
