import * as _ from "lodash";
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ReadingLog } from 'models/readingLog.model';
import { ReadingLogService } from './reading-log.service';

@Component({
    selector: 'app-reading-log',
    templateUrl: './reading-log.component.html',
    styleUrls: ['./reading-log.component.css']
})
export class ReadingLogComponent implements OnInit {
    readingLog: ReadingLog;

    constructor(
        private readingLogService: ReadingLogService
    ) {
        this.readingLog = new ReadingLog();

        this.readingLog.id = 0;
        this.readingLog.description = "Default description";
        this.readingLog.createdAt = new Date();
        this.readingLog.updatedAt = new Date();
    }

    public ngOnInit() {
        this.refresh();
    }

    public refresh() {
        this.readingLogService.getReadingLog()
            .subscribe(readingLog => {
                this.readingLog = readingLog;
                this.readingLog.entries = _.orderBy(this.readingLog.entries, ['readingDate'], ['asc']);
            },
            (error: any) => console.log(error),
            () => {});
    }
}
