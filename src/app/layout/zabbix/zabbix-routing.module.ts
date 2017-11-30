import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZabbixComponent } from './zabbix.component';

const routes: Routes = [
    { path: '', component: ZabbixComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZabbixRoutingModule { }
