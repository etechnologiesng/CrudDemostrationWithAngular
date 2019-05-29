import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { EventDetailComponent } from './Event-details/event-detail/event-detail.component';
import { EventDetailsComponent } from './Event-details/event-details.component';
import { EventListComponent } from './Event-details/event-list/event-list.component';
import { EventDetailService } from './shared/Event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventDetailComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EventDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
