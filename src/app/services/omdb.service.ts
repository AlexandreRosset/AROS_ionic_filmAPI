import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const omdbUrl = 'http://www.omdbapi.com/?apikey=75522b56';

@Injectable({
  providedIn: 'root'
})
export class OMDBService {

  constructor(private http: HttpClient) { }

  getfilms(keyword: string, page: number, typefilm: string): Observable<any> {
    const response: Observable<any> = this.http.get(omdbUrl + '&s=' + keyword + '&page=' + page + '&type=' + typefilm);
    return response;
  }
  getfilm(id: string): Observable<any> {
    const response: Observable<any> = this.http.get(omdbUrl + '&i=' + id + '&plot=full');
    return response;
  }


}
