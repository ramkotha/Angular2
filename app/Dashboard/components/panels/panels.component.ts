import { Component, OnInit } from '@angular/core';
import initCollapseArea = require('../../../../assets/js/init/initCollapseArea.js');

@Component({
    moduleId: module.id,
    selector: 'panels-cmp',
    templateUrl: 'panels.component.html',
})

export class PanelsComponent implements OnInit{
    ngOnInit(){
        initCollapseArea();
    }
}
