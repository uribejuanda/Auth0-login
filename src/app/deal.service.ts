import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DealService {

    private publicDealsUrl = 'http://localhost:3001/api/deals/public';
    private privateDealsUrl = 'http://localhost:3001/api/deals/private';
    public data;

    constructor(private http: HttpClient) {
    }

    getPublicDeals(): Observable<any> {
        return this.http
            .get(this.publicDealsUrl);
    }

    getPrivateDeals(): Observable<any> {
        return this.http
            .get(this.privateDealsUrl);
    }

}
