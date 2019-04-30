import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatChipsModule } from '@angular/material/chips';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatRippleModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

const materialModules = [MatButtonModule,
  MatCheckboxModule,
  NgMatSearchBarModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatRippleModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatSidenavModule,
  MatChipsModule,
  MatIconModule,
  MatListModule];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class XcodematcompModule { }
