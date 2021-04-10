import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {
    // private apiUrl: string = "http://localhost:3000/api/v1.1/";
    private apiUrl: string = "/api/v1.1/";

    constructor(private httpClient: HttpClient) { }

    newsletterSubscribe(data): Observable<any> {
        // return this.httpClient.post(this.apiUrl+'newsletter-add' , data, {observe: 'response'});
        return this.httpClient.post(this.apiUrl + 'newsletter-add', data, { observe: 'response' })
            .pipe(catchError(this.handleError));
        // return this.httpClient.post(this.apiUrl+'newsletter-add').pipe(map);
    }
    appointmentSubscribe(data): Observable<any> {
        return this.httpClient.post(this.apiUrl + 'appointment-add', data, { observe: 'response' })
            .pipe(catchError(this.handleError));
    }
    signUpSubscribe(data): Observable<any> {
        // return this.httpClient.get(this.apiUrl)
        //     .pipe(catchError(this.handleError));
        return this.httpClient.post(this.apiUrl + 'signup', data, { observe: 'response' })
            .pipe(catchError(this.handleError));
    }
    bookAppointment(data) {
        return this.httpClient.post(this.apiUrl + 'appointment-add', data);
    }
    handleError(err) {
        if (err instanceof HttpErrorResponse) {
            // server side error

        } else {
            // client side error

        }
        return throwError(err);
    }
}
