import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  journey: any;
  url = 'http://localhost:3000'
  constructor(private httpClient : HttpClient,private router: Router) { }

  registerApiCall(ApiCall: any,formData:any) {
    let url = this.url + '/register';
    return this.httpClient.post(url, ApiCall);
  }

  getApiCallProfile() {
    let url = this.url + '/profile';
    return this.httpClient.get(url);
  }

  updateApiCallProfile(user: any) {
    let url = this.url + '/profile';
    return this.httpClient.put(url, user);
  }

  navigateToRegistrationForm() {
    this.router.navigate(['/apicall/register']);
  }

  navigateToProfile() {
    this.router.navigate(['/apicall/profile']);
  }
}