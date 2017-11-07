import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {OperationalDashboardService} from "../../service/OperationalDashboard/OperationalDashboardService";

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    lobSelected = '';
    projectSelected = '';
    applicationSelected = '';

    constructor(private operationalDashboardService : OperationalDashboardService) { }
    ngOnInit() { }

    onChangeLob(){
        console.log(this.operationalDashboardService.project.get(this.lobSelected));
        console.log(this.lobSelected);
    }
}
