import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import initBootstrapTable = require('../../../../assets/js/initBootstrapTable.js');

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'bootstrap-table-cmp',
    templateUrl: 'bootstraptable.component.html'
})

export class BootstrapTableComponent implements OnInit{
    // constructor(private _elRef: ElementRef, private _renderer: Renderer) {}
    ngOnInit(){
        $.getScript('../../../../assets/js/plugins/bootstrap-table.js');
        initBootstrapTable();
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
    }
}
