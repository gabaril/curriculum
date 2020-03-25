import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public today: string;
  public expertiseFE: number;

  constructor() { }

  ngOnInit(): void {
    moment.locale('fr');
    this.today = moment().endOf('month').format('MMMM YYYY');
    this.expertiseFE = Math.round(moment('11-2018', 'MM-YYYY').startOf('month').diff(moment().endOf('month'), 'month', true) * - 1 + 13);
  }

}
