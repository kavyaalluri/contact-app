import { Component, Input , OnInit } from '@angular/core';
import { contacts } from '../contacts';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
@Input() receivedContact:contacts ={} as contacts;
  constructor() { }

  ngOnInit() {
  }

}