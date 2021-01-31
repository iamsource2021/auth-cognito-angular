import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, Observable,from } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * BehaviorSubject
   */
  public loggedIn: boolean;

  /**
   * constructor
   * @param router 
   */
  constructor() {}

  /**
   * get authenticat state
   */
  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          return true;
        }),
        catchError(error => {
          return of(false);
        })
      );
  }

  /**
   * signout
   */
  async signOut() {
    await from(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn = false;
        },
        error => console.log(error)
      );
  }
}
