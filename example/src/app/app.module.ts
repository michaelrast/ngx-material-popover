import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
//import { NgxMaterialPopoverModule } from '../../../project/src/lib/ngx-material-popover.module';
import { NgxMaterialPopoverModule } from 'ngx-material-popover';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxMaterialPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
