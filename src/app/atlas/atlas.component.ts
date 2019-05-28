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
    jumpTo(section) {
        document.querySelector('#'+section).scrollIntoView({behavior: 'smooth'});
    }
}
