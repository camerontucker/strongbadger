import { Component } from '@angular/core';
import { Events } from '../../../collections/events';
import { Mongo } from 'meteor/mongo';

@Component({
  selector: 'event-list',
  templateUrl: '/client/imports/event-list/event-list.html'
})
export class EventList {
  events: Mongo.Cursor<Object>;
  
  constructor () {
    this.events = Events.find();
  }
}