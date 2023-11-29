import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './shared/pages/authorization/authorization.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/pages/home/home.component';
import { WorkerTaskListComponent } from './worker/worker-task-list/worker-task-list.component';
import { WorkerTaskInfoComponent } from './worker/worker-task-info/worker-task-info.component';
import { PopupMenuComponent } from './shared/components/popup-menu/popup-menu.component';
import { WorkerSettingsComponent } from './worker/worker-settings/worker-settings.component';
import { SettingsComponent } from './shared/pages/settings/settings.component';
import { MapComponent } from './shared/components/map/map.component';
import { ManagerAppealListComponent } from './manager/manager-appeal-list/manager-appeal-list.component';
import { ManagerAppealInfoComponent } from './manager/manager-appeal-info/manager-appeal-info.component';
import { ManagerSettingsComponent } from './manager/manager-settings/manager-settings.component';
import { ScheduleWorkComponent } from './shared/pages/schedule-work/schedule-work.component';
import { ManagerScheduleWorkComponent } from './manager/manager-schedule-work/manager-schedule-work.component';
import { ManagerScheduleInfoComponent } from './manager/manager-schedule-info/manager-schedule-info.component';
import { ManagerCreateScheduleComponent } from './manager/manager-create-schedule/manager-create-schedule.component';
import { UnassembledComponent } from './shared/pages/unassembled/unassembled.component';
import { ManagerUnassembledComponent } from './manager/manager-unassembled/manager-unassembled.component';
import { ManagerUnassembledInfoComponent } from './manager/manager-unassembled-info/manager-unassembled-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    HomeComponent,
    WorkerTaskListComponent,
    WorkerTaskInfoComponent,
    PopupMenuComponent,
    WorkerSettingsComponent,
    SettingsComponent,
    MapComponent,
    ManagerAppealListComponent,
    ManagerAppealInfoComponent,
    ManagerSettingsComponent,
    ScheduleWorkComponent,
    ManagerScheduleWorkComponent,
    ManagerScheduleInfoComponent,
    ManagerCreateScheduleComponent,
    UnassembledComponent,
    ManagerUnassembledComponent,
    ManagerUnassembledInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
