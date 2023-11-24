import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http: HttpClient) { }
  getHello(){
    return this.http.get("http://localhost:9334/")
  }
}
