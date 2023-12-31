import {Component, OnChanges, SimpleChanges} from '@angular/core';
import { DefaultFilter } from 'ng2-smart-table';

@Component({
    template: `
        <ga-task-status-select
            [addTag]="false"
            [placeholder]="'TASKS_PAGE.TASKS_STATUS' | translate"
            (onChanged)="onChange($event)"
        ></ga-task-status-select>
    `,
})
export class TaskStatusFilterComponent extends DefaultFilter implements OnChanges {

    constructor() {
        super();
    }

    ngOnChanges(changes: SimpleChanges) {}

    onChange(filter: string | null) {
        this.column.filterFunction(filter);
    }
}
