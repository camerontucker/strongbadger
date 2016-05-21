import {Events} from '../collections/events.ts';
 
export function loadEvents() {
  if (Events.find().count() === 0) {
 
    var events = [
          {'name': 'Stay Tuned','description': 'We\'re going to party!'},
          //{'name': 'Book-signing','description': 'Stephen R. Donaldson'},
		      //{'name': 'Coffee grinding','description': 'The basics of coffee grinding'}
    ];
 
    for (var i = 0; i < events.length; i++) {
      Events.insert(events[i]);
    }
  }
};