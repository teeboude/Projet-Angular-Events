import { Component } from '@angular/core';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event = {
    title :'',
    time:'',
    type:''
  };

  constructor(private eventService:EventsService) {
  }

  addEvent() {
    this.eventService
      .createEvent(this.event)
      .subscribe(ok => {
        alert('ok')
      })
  }
}
