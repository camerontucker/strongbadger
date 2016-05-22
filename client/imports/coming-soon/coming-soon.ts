import { Component } from '@angular/core';
import { Footer } from '../footer/footer.ts';

@Component({
  selector: 'coming-soon',
  templateUrl: 'client/imports/coming-soon/coming-soon.html',
  directives: [Footer]
})

export class ComingSoon {
    constructor() {
        
    }
}