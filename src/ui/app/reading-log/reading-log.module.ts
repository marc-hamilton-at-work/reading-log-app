import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingLogRoutingModule } from './reading-log-routing.module';
import { ReadingLogComponent } from './reading-log.component';
import { ReadingLogService } from './reading-log.service';

@NgModule({
    declarations: [ReadingLogComponent],
    imports: [
        CommonModule,
        ReadingLogRoutingModule
    ],
    providers: [
        ReadingLogService
    ]
})
export class ReadingLogModule { }
