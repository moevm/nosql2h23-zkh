import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../types/enumerations';
import { Observable } from 'rxjs';
import { Appeal, Activity, ActivityCreate, UnassembledAppeal, UserData } from '../types/interfaces';

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

  create_schedule_work(manager_id: number, work: ActivityCreate): Observable<Activity> {
    return this.http.post<Activity>(
      `http://localhost:9334/activity?manager_id=${manager_id}`, work
    )
  }

  get_schedule_work(): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      `http://localhost:9334/activity`
    )
  }
}
