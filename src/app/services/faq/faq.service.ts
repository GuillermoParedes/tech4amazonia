import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('assets/api/faq.json');
  }
}
