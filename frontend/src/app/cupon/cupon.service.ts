import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, finalize, catchError } from 'rxjs/operators';

@Injectable()
export class CuponService {
  cuponSecuencial: BehaviorSubject<any[]>;
  cuponNoSecuencial: BehaviorSubject<any[]>;
  constructor(private http: HttpClient) {
    this.cuponSecuencial = new BehaviorSubject<any[]>([]);
    this.cuponNoSecuencial = new BehaviorSubject<any[]>([]);
  }

  generateCuponSecuencial() {
    // Comienzo spinner...
    this.http.get<any[]>(environment.backend + '/cupon/secuencial').pipe(
      tap((response) => {
        this.cuponSecuencial.next(response);
      }),
      catchError((error) => {
        // Gestion error
        return of(error);
      }),
      finalize(() => {
        console.log('Fin spinner...');
      })
    ).subscribe();
  }

  generateCuponNoSecuencial() {
    // Comienzo spinner...
    this.http
      .get<any[]>(environment.backend + '/cupon/noSecuencial')
      .pipe(
        tap((response) => {
          this.cuponNoSecuencial.next(response);
        }),
        catchError((error) => {
          // Gestion error
          return of(error);
        }),
        finalize(() => {
          console.log('Fin spinner...');
        })
      )
      .subscribe();
  }
}
