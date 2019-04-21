import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XcodematcompModule } from './xcodematcomp/xcodematcomp.module';
import { XcodecontactosComponent } from './xcodecontactos/xcodecontactos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { XcodemnaviComponent } from './xcodemnavi/xcodemnavi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { XcodecontentComponent } from './xcodecontent/xcodecontent.component';

@NgModule({
  declarations: [
    AppComponent,
    XcodecontactosComponent,
    XcodemnaviComponent,
    XcodecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    XcodematcompModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
