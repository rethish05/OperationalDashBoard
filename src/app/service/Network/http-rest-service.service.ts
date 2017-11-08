import {Injectable} from '@angular/core';
import {
    Http,
    Response,
    Headers
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/catch';


@Injectable()

export class HttpRestService {

    networkErrorNotification$: Observable<any>;
    observeNetworkErrors: Observer<any>;
    tokenNotification$: Observable<any>;
    observeTokenReceived: Observer<any>;

    appVersion: string;
    tokenCallDone = false;
    constructor(private jsonp: Http) {
        this.networkErrorNotification$ = new Observable(observer => this.observeNetworkErrors = observer).share();
        this.tokenNotification$ = new Observable(observer => this.observeTokenReceived = observer).share();
        // this.appVersion = appVersion;
        /*this.checkCookie();
        this.getToken()*/
    }

    private handleError(error: any) {
        const err = error.json();
        if (!err.message) {
            const test = [{
                type: 'Warning',    // SUCCESS|ERROR|INFO|WARNING
                message: 'We\'re sorry, something went wrong with our system. Please try again.'
            }];
            this.observeNetworkErrors.next(test);
        } else {
            this.observeNetworkErrors.next([err]);
        }
    }

    getToken() {
        return this.jsonp.get('/secureinjection/getSecureToken', {withCredentials: true}).subscribe(res => {
            this.tokenCallDone = true;
            this.observeTokenReceived.next({token: true});
        })
    }

    public getHeaders(modifiers) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Charset', 'UTF-8');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // headers.append('Access-Version', this.appVersion);

        /*if (modifiers && modifiers.attributes) {
            modifiers.attributes.forEach(attribute => {
                if (attribute.name === 'Content-Type' || attribute.name === 'Charset' || attribute.name === 'Access-Control-Allow-Origin' ||
                    attribute.name === 'Access-Control-Allow-Methods') {
                    headers.delete(attribute.name);
                }
                // now setting the new value to overwrite the old one
                headers.append(attribute.name, attribute.value);
            })
        }*/
       /* if (modifiers && modifiers.basicAuth) {
            headers.append('Authorization', 'Basic ' +
                btoa(this.hTTPServiceConstants[modifiers.basicAuth.user] + ':' + this.hTTPServiceConstants[modifiers.basicAuth.password]));
        }*/
        return headers;
    }


    public callGetService(url: string, headers?: object): Observable<any> {
        return this.jsonp.get(url, {headers: this.getHeaders(headers)})
            .map((res: Response): void => {
                return res.json();
            })
            /*.catch((error) => {
                this.handleError(error);
                return Observable.empty();
            });*/
    }

    public callPostService(url: string, body?: any, headers?: object): Observable<any> {
        return this.jsonp.post(url, body, {headers: this.getHeaders(headers), withCredentials: true})
            .map((res: Response): void => {
                return res.json();
            })
            /*.catch((error) => {
                this.handleError(error);
                // return Observable.empty();
            });*/
    }

    /*checkCookie() {
        if(!Cookie.check("UiSession")) {
            Cookie.set("UiSession", "dG9rZW5GZXRjaGVy");
        }
    }

    checkToken() {
        return false;
    }*/
}
