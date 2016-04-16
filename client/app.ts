import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap4-webpack-package';

import '/imports/ui/style.scss'; 

import {NgZone, Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Events} from '../collections/events';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class StrongBadger {
    events: Mongo.Cursor<Object>;
    
    constructor(zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.events = Events.find();
        }));
    }
}
 
bootstrap(StrongBadger);