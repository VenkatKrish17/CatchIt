import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  // url="https://catchitbackend.herokuapp.com"
  url="http://localhost:3000"
  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(formData:any):Observable<any>{
    return this.http.post(this.url+'/login/',formData)
    }
    register(formData:any):Observable<any>{
      return this.http.post(this.url+'/user/',formData)
      }

  // login(data){
  //   console.log("Sending..")
  //   console.log(data)
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return new Promise(resolve => {
  //     // We're using Angular HTTP provider to request the data,
  //     // then on the response, it'll map the JSON data to a parsed JS object.
  //     // Next, we process the data and resolve the promise with the new data.
  //     this.http.post('https://catchitbackend.herokuapp.com/user/',{"data":data},{
  //       headers: headers
  //     })
  //       .subscribe(response => {
  //         console.log(response) 
  //         // we've got back the raw data, now generate the core schedule data
  //         // and save the data for later reference
  //         //this.data = data;
  //         resolve(response);
  //       });
  //   });
  // }

}
