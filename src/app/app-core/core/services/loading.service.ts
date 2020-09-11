import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    readonly loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    constructor() { }

    showLoading() {
        this.loading.next(true);
    }

    hideLoading() {
        this.loading.next(false);
    }

    getValue() {
        return this.loading;
    }
}
