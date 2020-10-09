import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http"
import { catchError, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError,of } from 'rxjs';

export interface IPokemon {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) {  }

  getPokemons()  {
    return this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon').subscribe(res => res);
  }

  /**
   * @param {HttpErrorResponse} error Error a manejar
   * @returns Regresa un observable del error
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error ocurred retrieving data';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
