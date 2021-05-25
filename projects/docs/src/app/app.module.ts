import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from '@gui/gorilla-ui/src/lib/components/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
