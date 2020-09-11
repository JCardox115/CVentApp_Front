import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OAuthAccessService {
    constructor() { }

    public get getAccessToken() { return ''; }

    public get getUser() { return ''; }

    validAccessToken() {
        return true;
    }

    logOut() { }

    initializeOAuthService() { }
}
