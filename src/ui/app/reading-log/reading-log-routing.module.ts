import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadingLogComponent } from './reading-log.component';

const routes: Routes = [
     { path: 'readinglog', component: ReadingLogComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReadingLogRoutingModule { }
