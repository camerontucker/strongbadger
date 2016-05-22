import { Component } from '@angular/core';
import { RouterLink }  from '@angular/router-deprecated';

@Component({
  selector: 'coffee',
  templateUrl: 'client/imports/coffee/coffee.html',
  directives: [RouterLink]
})

export class Coffee {
    constructor() {
        
    }
}