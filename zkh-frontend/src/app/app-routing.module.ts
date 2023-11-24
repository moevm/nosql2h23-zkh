import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicComponent} from './basic/basic.component'
const routes: Routes = [
  {
    path: 'hello',
    component: BasicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
