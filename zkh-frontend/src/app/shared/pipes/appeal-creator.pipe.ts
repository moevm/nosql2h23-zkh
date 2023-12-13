import { Pipe, PipeTransform } from '@angular/core';
import { Appeal } from '../types/interfaces';
import { TenantAppealServiceService } from 'src/app/tenant/tenant-services/tenant-appeal-service.service';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'appealCreator',
  pure: false
})
export class AppealCreatorPipe implements PipeTransform {

  constructor(
    private tenantAppealService: TenantAppealServiceService,
    private authService: AuthService
  
  ) {

  }

  transform(value: Appeal[]): Appeal[] {
    if (this.tenantAppealService.only_mine) {
      return value.filter(
        v => v.tenant.id === this.authService.id
      )
    }
    return value
  }

}
