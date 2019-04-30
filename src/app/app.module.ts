import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XcodematcompModule } from './xcodematcomp/xcodematcomp.module';
import { XcodecontactosComponent } from './xcodecontactos/xcodecontactos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XcodemnaviComponent } from './xcodemnavi/xcodemnavi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { XcodecontentComponent } from './xcodecontent/xcodecontent.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { XcodemodctaComponent, XcodeModContentComponent } from './xcodemodcta/xcodemodcta.component';
import { XcodechipsComponent } from './xcodechips/xcodechips.component';


@NgModule({
  declarations: [
    AppComponent,
    XcodecontactosComponent,
    XcodemnaviComponent,
    XcodecontentComponent,
    HeroDetailComponent,
    XcodemodctaComponent,
    XcodeModContentComponent,
    XcodechipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    XcodematcompModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule
  ],
  entryComponents: [XcodeModContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
