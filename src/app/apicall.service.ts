import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  journey: any;
  url = 'http://localhost:3000'
  constructor(private httpClient : HttpClient) { }

  postApiCall(endPoint: string, formData:any) {
    let url = this.url + '/' + endPoint;
    return this.httpClient.post(url, formData)
    
  }                      
  // getApiCallProfile() {
  //   let url = this.url + '/profile';
  //   return this.httpClient.get(url);
  // }

  // updateApiCallProfile(user: any) {
  //   let url = this.url + '/profile';
  //   return this.httpClient.put(url, user);
  // }

  // navigateToRegistrationForm() {
  //   this.router.navigate(['/apicall/register']);
  // }

  // navigateToProfile() {
  //   this.router.navigate(['/apicall/profile']);
  // }

  getApiCall(journey : any, id?:any){
    let url = id ? this.url + '/' + journey + '/' + id :  this.url + '/' + journey;
    return this.httpClient.get(url);
  }
  updateData(endPoint:any,id:any,body:any) {
    let url = this.url + '/' + endPoint + '/' + id;
    return this.httpClient.patch(url,body)
   }
}
