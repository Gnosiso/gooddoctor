import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DoctorsService {
    private apiUrl: string = "http://localhost:3000/api/v1.1/";

    constructor(private httpClient: HttpClient) { }

    getDoctorAll(): Observable<any> {
        return this.httpClient.get<any>(this.apiUrl+'doctors');
    }

    getDoctorById(id) {
        // return this.http.get(this.url);
    }

    addDoctor(data, id = null) {
        return this.httpClient.post(this.apiUrl+'doctor-add', data);
        //  this.httpClient.post(this.baseUrl+'doctor-add', data)
        // .subscribe((result)=>{
        //     return result;
        // });
    }

    deleteDoctor(id) {
        // return this.http.get(this.url);
    }
}
