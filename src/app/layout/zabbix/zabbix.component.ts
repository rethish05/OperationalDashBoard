import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-zabbix',
    templateUrl: './zabbix.component.html',
    styleUrls: ['./zabbix.component.scss'],
    animations: [routerTransition()]
})
export class ZabbixComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
