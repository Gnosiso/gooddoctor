import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

    private apiUrl: string = "http://localhost:3000/api/v1.1/";

    constructor(private httpClient: HttpClient) { }

    addPatient(data, id = null) {
        return this.httpClient.post(this.apiUrl+'patient-add', data);
        //  this.httpClient.post(this.baseUrl+'doctor-add', data)
        // .subscribe((result)=>{
        //     return result;
        // });
    }

}
