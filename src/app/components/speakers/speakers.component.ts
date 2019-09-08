import { Component, OnInit } from '@angular/core';
import { SpeakersService } from 'src/app/services/speakers/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers: any;

  constructor(private service: SpeakersService) {}

  ngOnInit() {
    this.service.getData().subscribe(response => {
      this.speakers = response;
    });
  }
}
