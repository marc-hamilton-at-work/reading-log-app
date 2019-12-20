import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ReadingLog } from 'models/readingLog.model';

@Injectable({
    providedIn: 'root'
})
export class ReadingLogService {
    private serviceUrl = '/api/readinglogs/1';

    constructor(
        private http: HttpClient
    ) { }

    public getReadingLog(): Observable<ReadingLog> {
        return this.http.get<ReadingLog>(this.serviceUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError<ReadingLog>(`getReadingLog`))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
