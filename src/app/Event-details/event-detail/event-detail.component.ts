import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventDetailService } from '../../shared/Event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styles: []
})
export class EventDetailComponent implements OnInit {

  constructor(private service: EventDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      

      EventId: 0,
      EventName: '',
      EventDetails: '',
      StartDate: null,
      EndDate: null,
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.EventId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEvent().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Event Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putEvent().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Event Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
