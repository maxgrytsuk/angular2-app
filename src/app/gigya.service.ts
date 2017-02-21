import { Injectable } from '@angular/core';
import { Jsonp,  URLSearchParams } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import { AccountOptionsModel } from './account-options.model';

@Injectable()
export class GigyaService {

  credentials = {
    UserKey: 'AJA3Cw9XcJZf',
    UserSecret: '1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq',
    APIKey: '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK'
  };

  private host = 'https://accounts.gigya.com';

  private policiesUrlGet = 'accounts.getPolicies';

  constructor(private jsonp: Jsonp) { }

  getAccountOptions() {

    //let params = new URLSearchParams();
    //params.set('UserKey', this.credentials.UserKey);
    //params.set('UserSecret', this.credentials.UserSecret);
    //params.set('APIKey', this.credentials.APIKey);
    //params.set('callback', 'JSONP_CALLBACK');

    //return this.jsonp
    //    .get(`${this.host}/${this.policiesUrlGet}`, params)
    //    .map(response => <string[]> response.json()[1]);

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let term = 'test';
    let queryString =
        `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

    return this.jsonp
        .get(wikiUrl + queryString)
        .map(response => <string[]> response.json()[1]);

  }

  //private handleError(error: any): Promise<any> {
  //  return Promise.reject(error.message || error);
  //}
}
