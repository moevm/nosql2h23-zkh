import { Injectable } from '@angular/core';
import { ScheduleWork } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  create_schedule: boolean = false;

  selectScheduleWork(id: number) {
    this.selected_work = this.works.filter(w => w.id === id)[0]
  }

  works: ScheduleWork[] = [
    
  ]

  selected_work: ScheduleWork | null = this.works[0]
}
