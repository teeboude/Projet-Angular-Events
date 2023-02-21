import { Component } from '@angular/core';

import {Event} from "../../models/event"

@Component({
  selector: 'app-form-add-event',
  templateUrl: './form-add-event.component.html',
  styleUrls: ['./form-add-event.component.css']
})
export class FormAddEventComponent {

  typesList = ["Routine","Repas","Travail","Loisir"];

  submitted = false;
  event: any;

  onSubmit() { this.submitted = true; }

}
