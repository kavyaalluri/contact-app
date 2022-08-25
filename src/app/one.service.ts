import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contacts } from './contacts';

@Injectable()
export class OneService {
  constructor(private _http: HttpClient) {}
  public dataUrl: string = `https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json`;

  public getData(): Observable<contacts[]> {
   return this._http.get<contacts[]>(this.dataUrl);
  }
}
