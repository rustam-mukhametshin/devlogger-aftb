import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    NavbarComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
