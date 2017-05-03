import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: []
})
export class AccountModule { }
