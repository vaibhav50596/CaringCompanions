import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { SeniorCitizen } from './senior-citizen';

@Injectable({
  providedIn: 'root'
})
export class CaringCompanionsServiceService {

  userData: SeniorCitizen;
  volunteerData;
  private state$ = new BehaviorSubject<any>('');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = 'http://34.205.63.53:5000/getcitizens';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  changeState(myChange) {
    this.state$.next(myChange);
  }

  getState() {
    return this.state$.asObservable();
  }

}
