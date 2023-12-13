import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../types/enumerations';
import { Observable } from 'rxjs';
import { Appeal, Activity, ActivityCreate, UnassembledAppeal, UserData, Message } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<UserData> {
    return this.http.get<UserData>(
      `http://localhost:9334/auth?login=${login}&password=${password}`
    )
  }

  get_all_appeals(): Observable<Appeal[]> {
    return this.http.get<Appeal[]>(
      `http://localhost:9334/appeal`
    )
  }

  get_all_activities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      `http://localhost:9334/activity`
    )
  }

  get_unassembled(): Observable<UnassembledAppeal[]> {
    return this.http.get<UnassembledAppeal[]>(
      `http://localhost:9334/appeal/new`
    )
  }

  get_appeal(role: Role, id: number): Observable<Appeal[]> {
    return this.http.get<Appeal[]>(
      `http://localhost:9334/${role.toLowerCase()}/${id}/appeal`
    )
  }

  bind_appeal(id_appeal: number, manager_id: number) {
    return this.http.put(
      `http://localhost:9334/appeal/${id_appeal}?manager_id=${manager_id}`, {}
    )
  }

  create_appeal(tenant_id: number, body: any): Observable<Appeal> {
    return this.http.post<Appeal>(
      `http://localhost:9334/appeal?tenant_id=${tenant_id}`, body
    )
  }

  save_settings(role: Role, id: number, name: string, phone: string): Observable<{name: string, phoneNumber: string}> {
    return this.http.put<{name: string, phoneNumber: string}>(
      `http://localhost:9334/${role.toLowerCase()}/${id}`, {name: name, phoneNumber: phone}
    )
  }

  send_message(id: number, role: Role, id_appeal: number, msg: string): Observable<Message> {
    return this.http.post<Message>(
      `http://localhost:9334/appeal/${id_appeal}/${role.toLowerCase()}/${id}/msg`,
      {
        message: msg,
        date: new Date()
      }
    )
  }

  create_schedule_work(manager_id: number, work: ActivityCreate): Observable<Activity> {
    return this.http.post<Activity>(
      `http://localhost:9334/activity?manager_id=${manager_id}`, work
    )
  }

  export(): Observable<string> {
    return this.http.get(`http://localhost:9334/export`, {responseType: 'text'})
  }
}
