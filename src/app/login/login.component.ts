import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { OperationalDashboardService } from "app/service/OperationalDashboard/OperationalDashboardService";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    name:string  ='';
    password:string='';
    
    constructor(private operationalDashboardService : OperationalDashboardService,
            public  router:Router) { }
    ngOnInit() {
    }

    onLoggedin() {
        console.log('username/'+this.name+'@cable/password/'+this.password);
        this.operationalDashboardService.authenticate(this.name,this.password)
        .subscribe((res :any)=>{
            console.log(res[0]);
            var status = res[0].status;
            if( 'Success' === status){
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
            }else{
                localStorage.setItem('isLoggedin', 'false');
            }

        });
       
    }

}
