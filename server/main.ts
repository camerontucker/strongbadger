import {loadEvents} from './load-events.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadEvents);