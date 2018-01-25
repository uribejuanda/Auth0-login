import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DealService } from '../deal.service';

@Component({
    selector: 'app-private-deals',
    templateUrl: './private-deals.component.html',
    styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
    public dealsObservable: Observable<any[]>;

    constructor(private dealsService: DealService) {
    }

    ngOnInit() {
        this.dealsObservable = this.dealsService.getPrivateDeals();
    }

}
