import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../models/event"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  events?: Event[];

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService
      .fetchEvents()
      .subscribe(data => {
        this.events = data;
      });
  }
}
