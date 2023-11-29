import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../types/enumerations';
import { Observable } from 'rxjs';
import { ManagerAppeal, ScheduleWork, ScheduleWorkCreate, UnassembledAppeal, UserData, WorkerTask } from '../types/interfaces';

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

  get_appeal(role: Role, id: number): Observable<WorkerTask[] | ManagerAppeal[]> {
    return this.http.get<WorkerTask[] | ManagerAppeal[]>(
      `http://localhost:9334/${role.toLowerCase()}/${id}/appeal`
    )
  }

  bind_appeal(id_appeal: number, manager_id: number) {
    return this.http.put(
      `/appeal/${id_appeal}?manager_id=${manager_id}`, {}
    )
  }

  create_schedule_work(manager_id: number, work: ScheduleWorkCreate): Observable<ScheduleWork> {
    return this.http.post<ScheduleWork>(
      `http://localhost:9334/activity?manager_id=${manager_id}`, work
    )
  }

  get_schedule_work(): Observable<ScheduleWork[]> {
    return this.http.get<ScheduleWork[]>(
      `http://localhost:9334/activity`
    )
  }
}
