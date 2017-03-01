import { Component , OnInit } from '@angular/core';
import initWizard = require('../../../../assets/js/initWizard.js');

@Component({
    moduleId: module.id,
    selector: 'regular-table-cmp',
    templateUrl: 'regulartable.component.html'
})

export class RegularTableComponent implements OnInit{

    ngOnInit(){
        initWizard();
    }
}
