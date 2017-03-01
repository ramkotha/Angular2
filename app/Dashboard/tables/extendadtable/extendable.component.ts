import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})

export class ExtendedTableComponent implements OnInit{
    ngOnInit(){
        $.getScript('../../../../assets/js/plugins/bootstrap-switch-tags.js');
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();

    }
}
