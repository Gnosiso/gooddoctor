import { GeneralService } from 'src/app/services/general.service';
import { NgForm, Form, Validators, FormGroup, FormControl } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { PatientsService } from 'src/app/services/patients.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    // private doctor: Doctor = new Doctor();
    public message: string = "";

    constructor(private generalService: GeneralService, private doctorsService:DoctorsService, private patientsService:PatientsService, private notificationsService: NotificationsService) { }

    ngOnInit(): void {
    }
    signUpForm = new FormGroup({
        userType: new FormControl(''),
        name: new FormControl(''),
        mobile: new FormControl(''),
        email: new FormControl('')
        // email: new FormControl('', [Validators.required, Validators.email])
    });

    signUpSubscribe(){
        if (this.signUpForm.valid) {
            // console.log(this.signUpForm.value);
            // return;
            this.generalService.signUpSubscribe(this.signUpForm.value)
                .subscribe(res => {
                    console.log(res);

                    // if (res.status == 201) {
                    //     this.message = "Thanks for registering.";
                    //     this.notificationsService.success('', this.message);
                    // } else if (res.body.code == 11000) {
                    //     this.message = "Already registered.";
                    //     this.notificationsService.error(null, this.message);
                    // } else {
                    //     this.message = "Error occurred.";
                    // }
                },
                    error => {
                        console.log(error.message);
                        // this.notificationsService.error("Error", error.message)
                    }
                )
                ;
        }
    }
}
