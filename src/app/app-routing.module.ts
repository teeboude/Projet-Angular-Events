import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import { FormAddEventComponent} from "./components/form-add-event/form-add-event.component";

const routes: Routes = [
  { path: 'events', component: CalendarComponent },
  { path: 'events/add', component: FormAddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
