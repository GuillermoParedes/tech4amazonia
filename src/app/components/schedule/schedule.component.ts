import { Component, OnInit } from '@angular/core';
import { SchedulesService } from 'src/app/services/schedules/schedules.service';
import lodash from 'lodash';
import slug from 'slug';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedules: any;
  dates: any = [];
  constructor(private service: SchedulesService) {}

  ngOnInit() {
    this.service.getData().subscribe(response => {
      const groupDate = lodash.groupBy(response, 'Fecha');
      lodash.forEach(Object.keys(groupDate), ele => {
        this.dates.push({
          tab: slug(ele),
          label: ele
        });
      });
      this.schedules = lodash.values(groupDate);
    });
  }
}
