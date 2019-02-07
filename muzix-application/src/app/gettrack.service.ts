import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class GettrackService {

  constructor (private http: HttpClient) {}
     // private instance variable to hold base url
     commentsUrl;
     getMuzixs(value:string) {
       console.log(value);
       this.commentsUrl = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + value + '&api_key=30ffe4057c57f321fa1e9220466ac6c4&format=json';
      // ...using get request
      console.log(this.commentsUrl);
      return this.http.get(this.commentsUrl);
  }
    }
