import { Component, OnInit, Injectable } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { InjectFlags } from '@angular/compiler/src/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.css']
})

@Injectable({
    providedIn: 'root'
  })
  
export class HeaderComponent implements OnInit {

    constructor(public homeservice: HomeService, public headerService:HeaderService) {
        this.headerService.ReloadCar();
    }

    ngOnInit(): void {
        try {

        } catch (error) {

        }
    }

    logout() { }
}
