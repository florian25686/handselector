import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HandselectorComponent } from './handselector/handselector.component';
import { ClickMeComponent } from './click-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HandselectorComponent,
    ClickMeComponent
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
