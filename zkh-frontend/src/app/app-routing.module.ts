import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './shared/pages/authorization/authorization.component';
import { SettingsComponent } from './shared/pages/settings/settings.component';
import { WorkerTaskListPageComponent } from './shared/pages/worker-task-list-page/worker-task-list-page.component';
import { TenantAppealHistoryPageComponent } from './shared/pages/tenant-appeal-history-page/tenant-appeal-history-page.component';
import { TenantAppealListPageComponent } from './shared/pages/tenant-appeal-list-page/tenant-appeal-list-page.component';
import { ManagerAllAppealsPageComponent } from './shared/pages/manager-all-appeals-page/manager-all-appeals-page.component';
import { ManagerMyAppealsPageComponent } from './shared/pages/manager-my-appeals-page/manager-my-appeals-page.component';
import { ManagerScheduleWorkPageComponent } from './shared/pages/manager-schedule-work-page/manager-schedule-work-page.component';
import { ManagerUnassembledPageComponent } from './shared/pages/manager-unassembled-page/manager-unassembled-page.component';

const routes: Routes = [
  {path: "", redirectTo: "authorization", pathMatch: "full"},
  {path: "authorization", component: AuthorizationComponent},
  {path: "worker-tasks", component: WorkerTaskListPageComponent},
  {path: "tenant-appeal-history", component: TenantAppealHistoryPageComponent},
  {path: "tenant-appeal-list", component: TenantAppealListPageComponent},
  {path: "manager-all-appeals", component: ManagerAllAppealsPageComponent},
  {path: "manager-my-appeals", component: ManagerMyAppealsPageComponent},
  {path: "manager-shedule-work", component: ManagerScheduleWorkPageComponent},
  {path: "manager-unassembled", component: ManagerUnassembledPageComponent},
  {path: "settings", component: SettingsComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }
)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
