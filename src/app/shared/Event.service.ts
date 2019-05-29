import { Event } from './Event.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  formData: Event;
  readonly rootURL = 'http://localhost:59035/api';
  eventList : Event[];

  constructor(private http: HttpClient) {

  }

  postEvent() {

    
    return this.http.post(this.rootURL + '/event', this.formData);
  }
  putEvent() {
    return this.http.put(this.rootURL + '/event/'+ this.formData.EventId, this.formData);
  }
  deleteEvent(id) {
    return this.http.delete(this.rootURL + '/event/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/event')
    .toPromise()
      .then(res => this.eventList = res as Event[]);
  }
}
