import {Events} from '../collections/events.ts';
 
export function loadEvents() {
  if (Events.find().count() === 0) {
 
    var events = [
          {'name': 'Live music','description': 'Banjos!'},
          {'name': 'Book-signing','description': 'Stephen R. Donaldson'},
		  {'name': 'Coffee grinding','description': 'The basics of coffee grinding'}
    ];
 
    for (var i = 0; i < events.length; i++) {
      Events.insert(events[i]);
    }
  }
};