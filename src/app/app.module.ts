import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HandselectorComponent } from './handselector/handselector.component';
import { HandImagesComponent } from './hand-images.component';
import { FeetImagesComponent } from './feet-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HandselectorComponent,
    HandImagesComponent,
    FeetImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
