import { Injectable } from '@angular/core';
import { Jsonp,  URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GigyaApiService {

  private host = 'https://accounts.gigya.com';

  private policiesUrlGet = 'accounts.getPolicies';

  private credentials = {
    UserKey: 'AJA3Cw9XcJZf',
    UserSecret: '1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq',
    APIKey: '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK'
  };

  constructor(private jsonp: Jsonp) { }

  getPolicies() {
    let params = new URLSearchParams('', new GigyaQueryEncoder());
    params.set('userkey', this.credentials.UserKey);
    params.set('secret', this.credentials.UserSecret);
    params.set('apikey', this.credentials.APIKey);
    params.set('format', 'jsonp');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(`${this.host}/${this.policiesUrlGet}`, { search: params })
      .map(response => response.json())
      .map(data => data)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
   return Promise.reject(error.message || error);
  }
}

class GigyaQueryEncoder extends QueryEncoder {
  encodeKey(k: string): string {
    return gigyaEncodingFunction(k);
  }
  encodeValue(v: string): string {
    return gigyaEncodingFunction(v);
  }
}

/*
* Gigya API service demands '+' to be encoded
* */
function gigyaEncodingFunction(v) {
  return encodeURIComponent(v)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/gi, '$')
    .replace(/%2C/gi, ',')
    .replace(/%3B/gi, ';')
    // .replace(/%2B/gi, '+')
    .replace(/%3D/gi, '=')
    .replace(/%3F/gi, '?')
    .replace(/%2F/gi, '/');
}
