import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
    selector: 'app-atlas',
    templateUrl: './atlas.component.html',
    styleUrls: ['./atlas.component.scss']
})
export class AtlasComponent implements OnInit {
    constructor() {

    }
    ngOnInit() {
        AOS.init();
    }
    jumptoContact() {
        document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
    }
    jumptoServices() {
        document.querySelector('#services').scrollIntoView({behavior: 'smooth'});
    }
}
