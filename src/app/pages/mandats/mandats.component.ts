import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mandats',
  templateUrl: './mandats.component.html',
  styleUrls: ['./mandats.component.scss']
})
export class MandatsComponent implements OnInit {
  public today: string;

  constructor() { }

  ngOnInit(): void {
    moment.locale('fr');
    this.today = moment().endOf('month').format('MMMM YYYY');
  }

}
