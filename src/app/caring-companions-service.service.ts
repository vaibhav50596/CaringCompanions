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
  apiUrl = 'https://6p0z6gepe8.execute-api.us-east-1.amazonaws.com/dev/';
  isHit: boolean = false;


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getcitizens')
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getMatchedSeniors(volunteer_name: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'getmatchingcitizens', { headers: { 'X-volunteer': volunteer_name } })
      .pipe(
        tap(product => console.log('fetched data')),
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

  postVolunteerRequest(object): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + 'sendemail', object)
      .pipe(
        tap(product => console.log('posted data')),
        catchError(this.handleError('getProducts', []))
      );
  }

  changeState(myChange) {
    this.state$.next(myChange);
  }

  getState() {
    return this.state$.asObservable();
  }

}
