import { Component } from '@angular/core';
import { Activity } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-tenant-schedule-modal',
  templateUrl: './tenant-schedule-modal.component.html',
  styleUrls: ['./tenant-schedule-modal.component.css']
})
export class TenantScheduleModalComponent {

  ativities: Activity[] = [
    {
      id: 1,
      title: "Отключение горячей воды",
      dateStart: new Date(),
      dateEnd: new Date(),
      description: "Отключаем",
      address: "f",
      manager: {
        id: 1,
        name: "Иванов Иван Иванович"
      },
      geotag: {
        latitude: 0,
        longitude: 1
      }
    },
    {
      id: 2,
      title: "Отключение горячей воды",
      dateStart: new Date(),
      dateEnd: new Date(),
      description: "Отключаем",
      address: "f",
      manager: {
        id: 1,
        name: "Иванов Иван Иванович"
      },
      geotag: {
        latitude: 0,
        longitude: 1
      }
    },
    {
      id: 3,
      title: "Отключение горячей воды",
      dateStart: new Date(),
      description: "Отключаем",
      address: "f",
      manager: {
        id: 1,
        name: "Иванов Иван Иванович"
      },
      geotag: {
        latitude: 0,
        longitude: 1
      }
    }
  ]
}
