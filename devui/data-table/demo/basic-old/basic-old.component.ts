import { Component, OnInit } from '@angular/core';
import { originSource, SourceType } from '../mock-data';

@Component({
    selector: 'd-basic-old',
    templateUrl: './basic-old.component.html'
})
export class BasicOldComponent implements OnInit {
    basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
    dataTableOptions = {
        columns: [
            {
                field: 'firstName',
                header: 'First Name',
                fieldType: 'text'
            },
            {
                field: 'lastName',
                header: 'Last Name',
                fieldType: 'text'
            },
            {
                field: 'gender',
                header: 'Gender',
                fieldType: 'text'
            },
            {
                field: 'dob',
                header: 'Date of birth',
                fieldType: 'date'
            }
        ]
    };


    ngOnInit() {
    }
}
