import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

    constructor(private doctors: DoctorsService) {

    }

    ngOnInit(): void {
        // this.doctors.getDoctorAll().subscribe(result => {
        //     console.log("result",result);
        // })
    }
    getDoctors() {
    }
}
