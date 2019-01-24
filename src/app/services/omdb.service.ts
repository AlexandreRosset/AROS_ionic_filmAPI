import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const omdbUrl = 'http://www.omdbapi.com/?apikey=75522b56';

@Injectable({
  providedIn: 'root'
})
export class OMDBService {

  constructor(private http: HttpClient) { }
// TODO: adapter en fonction de la plateforme
  getData(): Observable<any> {
    const response1 = this.http.get(omdbUrl + '&t=D');
    const response2 = this.http.get(omdbUrl + '&t=toto');
    const response3 = this.http.get(omdbUrl + '&t=henri');
    const response4 = this.http.get(omdbUrl + '&t=arnold');
    return forkJoin([response1, response2, response3, response4]);
  }

  getfilms(keyword: string, page: number): Observable<any> {
    const response: Observable<any> = this.http.get(omdbUrl + '&s=' + keyword + '&page=' + page);
    return response;
  }


}
