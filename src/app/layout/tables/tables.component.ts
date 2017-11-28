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
    filterEnable = true;

    listOfAppTable : any = [  {
        'lob': 'DATA',
        'project': 'WIFI',
        'application': 'Radius',
        'server': 'cmptrn-dt-1d.ula.comcast.net',
        'status': 'S'
    },
        {
            'lob': 'DATA',
            'project': 'WIFI',
            'application': 'Radius',
            'server': 'cmptrn-dt-2d.ula.comcast.net',
            'status': 'A'
        }];

    constructor(private operationalDashboardService : OperationalDashboardService) { }
    ngOnInit() {

    }

    onChangeLob(){
        console.log(this.operationalDashboardService.project.get(this.lobSelected));
        console.log(this.lobSelected);
    }

    doFilter(){

        this.operationalDashboardService.doFilter(this.lobSelected, this.projectSelected, this.applicationSelected)
            .subscribe( res =>{
                this.listOfAppTable = res;
            });
    }

    performAction(action:string, server: string, application: string, project: string, lob: string){
        this.operationalDashboardService.performAction(action, server, application, project, lob)
            .subscribe((res :any)=>{
                console.log(res[0]);
                var status = res[0].status;
                if( 'Success' === status){
                    alert(application+' is started successfully in '+ server);
                }else{
                    alert(application+' is start failed in '+ server);
                }

            });
    }

    viewLog(){

    }
}
