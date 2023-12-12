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
import { ManagerScheduleWorkComponent } from './manager/manager-schedule-work/manager-schedule-work.component';
import { ManagerScheduleInfoComponent } from './manager/manager-schedule-info/manager-schedule-info.component';
import { ManagerCreateScheduleComponent } from './manager/manager-create-schedule/manager-create-schedule.component';
import { ManagerUnassembledComponent } from './manager/manager-unassembled/manager-unassembled.component';
import { ManagerUnassembledInfoComponent } from './manager/manager-unassembled-info/manager-unassembled-info.component';
import { TenantAppealHistoryComponent } from './tenant/tenant-appeal-history/tenant-appeal-history.component';
import { TenantAppealInfoComponent } from './tenant/tenant-appeal-info/tenant-appeal-info.component';
import { TenantAppealListComponent } from './tenant/tenant-appeal-list/tenant-appeal-list.component';
import { TenantSettingsComponent } from './tenant/tenant-settings/tenant-settings.component';
import { TenantScheduleModalComponent } from './tenant/tenant-schedule-modal/tenant-schedule-modal.component';
import { TenantAppealHistoryPageComponent } from './shared/pages/tenant-appeal-history-page/tenant-appeal-history-page.component';
import { TenantAppealListPageComponent } from './shared/pages/tenant-appeal-list-page/tenant-appeal-list-page.component';
import { WorkerTaskListPageComponent } from './shared/pages/worker-task-list-page/worker-task-list-page.component';
import { ManagerUnassembledPageComponent } from './shared/pages/manager-unassembled-page/manager-unassembled-page.component';
import { ManagerScheduleWorkPageComponent } from './shared/pages/manager-schedule-work-page/manager-schedule-work-page.component';
import { ManagerMyAppealsPageComponent } from './shared/pages/manager-my-appeals-page/manager-my-appeals-page.component';
import { ManagerAllAppealsPageComponent } from './shared/pages/manager-all-appeals-page/manager-all-appeals-page.component';

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
    ManagerScheduleWorkComponent,
    ManagerScheduleInfoComponent,
    ManagerCreateScheduleComponent,
    ManagerUnassembledComponent,
    ManagerUnassembledInfoComponent,
    TenantAppealHistoryComponent,
    TenantAppealInfoComponent,
    TenantAppealListComponent,
    TenantSettingsComponent,
    TenantScheduleModalComponent,
    TenantAppealHistoryPageComponent,
    TenantAppealListPageComponent,
    WorkerTaskListPageComponent,
    ManagerUnassembledPageComponent,
    ManagerScheduleWorkPageComponent,
    ManagerMyAppealsPageComponent,
    ManagerAllAppealsPageComponent,
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
