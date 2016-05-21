import 'bootstrap4-webpack-package';

import '/imports/ui/style.scss';

import { Component } from '@angular/core';
import { RouterLink }  from '@angular/router-deprecated';

@Component({
  selector: 'coming-soon',
  templateUrl: 'client/imports/coming-soon/coming-soon.html',
  directives: [RouterLink]
})

export class ComingSoon {
    constructor() {
        
    }
}