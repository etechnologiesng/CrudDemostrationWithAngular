import { Event } from './../../shared/Event.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventDetailService } from '../../shared/Event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: []
})
export class EventListComponent implements OnInit {

  constructor(private service: EventDetailService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Event) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(EventId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteEvent(EventId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Event Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
