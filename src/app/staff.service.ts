import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Staff } from './staff/staff.model';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private API = 'http://localhost:8080/api/staff';
  constructor(private http: HttpClient, private router: Router) { }

  createStaff(name: string, email: string, phone: string, address: string) {
    const staffData: Staff = { name, email, phone, address };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.post<Staff>(this.API, staffData, options).pipe(
      catchError(this.handleError<Staff>('createStaff'))).subscribe(response => {
        this.router.navigate(['/home']);
      });
  }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.API).pipe(
      tap(data => console.log(data))
    ).pipe(
      catchError(this.handleError<Staff[]>('getStaff')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
