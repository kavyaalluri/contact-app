import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { OneService } from '../one.service';
import { contacts } from '../contacts';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  public contact: contacts[] = [] as contacts[];
  @Output() sendContact = new EventEmitter();
  constructor(private service: OneService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data: contacts[]) => {
      this.contact = data;
    });
  }
  selectContact(contact: contacts) {
    return this.sendContact.emit(contact);
  }
}
