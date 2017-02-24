import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataAccessService {


  constructor(private http: Http) { }

  updateStatus(status: string){
    return this.http.post("http://localhost:3000/status", {
      "id":"5",
      "message": status,
      "by": "Anonymous"
    }).toPromise().then((response) => console.info(response));
  }

  getStatusList(): Promise<Array<any>>{
    return this.http.get("http://localhost:3000/status")
      .map((response) => response.json())
      .toPromise();
  }

}
