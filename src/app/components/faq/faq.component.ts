import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: any = [];
  constructor(private service: FaqService) {}

  ngOnInit() {
    this.service.getData().subscribe(response => {
      this.faqs = response;
    });
  }
}
