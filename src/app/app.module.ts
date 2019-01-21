import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FacoriteIcon } from './facorite-icon/facorite-icon.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { textCasting } from './text-casing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FacoriteIcon,
    TitleCasingComponent,
    textCasting
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FacoriteIcon]
})
export class AppModule { }
