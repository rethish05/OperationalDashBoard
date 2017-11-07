import {Injectable} from '@angular/core';

@Injectable()
export class OperationalDashboardService {
    lobList : Array<string>;
    project : Map<String,Array<string>>;
    application : Map<String,Array<string>>;

    constructor(){
       this.fillTheList(this.response);

       console.log(this.lobList);
       console.log(this.project);
       console.log(this.application);
    }

    fillTheList( response : any ){
        this.lobList = [];
        this.project =  new Map();
        this.application = new Map();
        for( var i = 0; i < response.length; ++ i){
            this.lobList.push(response[i].id);
            for( var j = 0; j < response[i].list.length; ++ j){
                if( !this.project.has(response[i].id)){
                    this.project.set(response[i].id,new Array());
                }
                this.project.get(response[i].id).push(response[i].list[j].idDesc);

                for( var k = 0; k < response[i].list[j].list.length; ++ k){
                    if( !this.application.has(response[i].list[j].idDesc)){
                        this.application.set(response[i].list[j].idDesc,new Array());
                    }
                    this.application.get(response[i].list[j].idDesc).push(response[i].list[j].list[k].idDesc);
                }
            }
        }
    }

    response = [{
        "id": "DATA",
        "idDesc": "DATA",
        "type": "lob",
        "list": [{
            "id": "WIFI",
            "idDesc": "WIFI",
            "type": "PJ",
            "list": [{
                "id": "RADIUS_LOADER",
                "idDesc": "RADIUS_LOADER",
                "type": "APP"
            }]
        }]
    }, {
        "id": "VIDEO",
        "idDesc": "VIDEO",
        "type": "lob",
        "list": [{
            "id": "COUPON",
            "idDesc": "COUPON",
            "type": "PJ",
            "list": [{
                "id": "Couponmediation",
                "idDesc": "Couponmediation",
                "type": "APP"
            }]
        }, {
            "id": "NETFLIX",
            "idDesc": "NETFLIX",
            "type": "PJ",
            "list": [{
                "id": "Netflix processor",
                "idDesc": "Netflix processor",
                "type": "APP"
            }]
        }]
    }, {
        "id": "VOICE",
        "idDesc": "VOICE",
        "type": "lob",
        "list": [{
            "id": "CDV",
            "idDesc": "CDV",
            "type": "PJ",
            "list": [{
                "id": "Legal",
                "idDesc": "Legal",
                "type": "APP"
            }, {
                "id": "Neptune",
                "idDesc": "Neptune",
                "type": "APP"
            }]
        }, {
            "id": "IMS",
            "idDesc": "IMS",
            "type": "PJ",
            "list": [{
                "id": "Collector",
                "idDesc": "Collector",
                "type": "APP"
            }]
        }]
    }];



}
