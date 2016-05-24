import { Component } from '@angular/core';
import { Footer } from '../footer/footer.ts';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'coming-soon',
  templateUrl: 'client/imports/coming-soon/coming-soon.html',
  directives: [Footer, RouterLink]
})

export class ComingSoon {
    constructor() {
        
    }
}