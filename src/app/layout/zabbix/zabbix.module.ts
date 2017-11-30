import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZabbixRoutingModule } from './zabbix-routing.module';
import { ZabbixComponent } from './zabbix.component';

@NgModule({
  imports: [
    CommonModule,
    ZabbixRoutingModule
  ],
  declarations: [ZabbixComponent]
})
export class ZabbixModule { }
