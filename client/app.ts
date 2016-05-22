import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap4-webpack-package';

import '/imports/ui/style.scss';

import {Component, NgZone, provide} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Tracker} from 'meteor/tracker';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink, Router } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { ComingSoon } from './imports/coming-soon/coming-soon.ts';
import { Coffee } from './imports/coffee/coffee.ts';
import { EventList } from './imports/event-list/event-list.ts';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/coming-soon', name: 'ComingSoon', component: ComingSoon, useAsDefault: true },
  { path: '/coffee', name: 'Coffee', component: Coffee },
  { path: '/events', name: 'EventList', component: EventList }
])

class StrongBadger {
}
 
bootstrap(StrongBadger, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);