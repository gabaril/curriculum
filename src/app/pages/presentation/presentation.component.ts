import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  public age: number;
  public experience: number;

  constructor() { }

  ngOnInit(): void {
    this.age = moment('04-12-1992', 'DD-MM-YYYY').diff(moment(), 'years') * -1;
    this.experience = moment('03-2017', 'MM-YYYY').diff(moment(), 'years') * -1;
  }

}
