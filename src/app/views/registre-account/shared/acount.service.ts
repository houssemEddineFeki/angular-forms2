import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { IAccount } from '../account';

@Injectable({
    providedIn: 'root'// the instance of AccountService is available for injection any where in the application 
})
export class AccountService {
    private _AccounttUrl = 'assets/accounts.json';
    constructor(private _http: HttpClient){
    }
    getAccounts(): Observable<IAccount[]>
    {
        return this._http.get<IAccount[]>(this._AccounttUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError), );
    }
    private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}