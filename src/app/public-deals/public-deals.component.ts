import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DealService } from '../deal.service';

@Component({
    selector: 'app-public-deals',
    templateUrl: './public-deals.component.html',
    styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
    public dealsObservable: Observable<any[]>;
    public error: any;

    constructor(private dealService: DealService) {
    }

    ngOnInit() {
        this.dealsObservable = this.dealService.getPublicDeals()
    }

}
