import { Injectable } from '@angular/core';
import { Activity } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  create_schedule: boolean = false;

  selectScheduleWork(id: number) {
    this.selected_work = this.works.filter(w => w.id === id)[0]
  }

  works: Activity[] = [
    
  ]

  selected_work: Activity | null = this.works[0]
}
