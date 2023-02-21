import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { FormAddEventComponent } from './components/form-add-event/form-add-event.component'

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AddEventComponent,
    FormAddEventComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
