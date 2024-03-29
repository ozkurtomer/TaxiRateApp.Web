import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpServiceService {
  constructor(private http: HttpClient) {}

  getIPAddress() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
}
