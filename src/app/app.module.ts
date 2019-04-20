import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XcodematcompModule } from './xcodematcomp/xcodematcomp.module';
import { XcodecontactosComponent } from './xcodecontactos/xcodecontactos.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { XcodemnaviComponent } from './xcodemnavi/xcodemnavi.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    XcodecontactosComponent,
    XcodemnaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    XcodematcompModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
