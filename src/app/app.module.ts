import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacoriteIcon } from './facorite-icon/facorite-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FacoriteIcon
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, FacoriteIcon]
})
export class AppModule { }
