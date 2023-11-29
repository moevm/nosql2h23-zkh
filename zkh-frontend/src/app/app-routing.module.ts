import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './shared/pages/authorization/authorization.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { SettingsComponent } from './shared/pages/settings/settings.component';
import { ScheduleWorkComponent } from './shared/pages/schedule-work/schedule-work.component';
import { UnassembledComponent } from './shared/pages/unassembled/unassembled.component';

const routes: Routes = [
  {path: "", redirectTo: "authorization", pathMatch: "full"},
  {path: "authorization", component: AuthorizationComponent},
  {path: "home", component: HomeComponent},
  {path: "settings", component: SettingsComponent},
  {path: "schedule", component: ScheduleWorkComponent},
  {path: "unassembled", component: UnassembledComponent}
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
