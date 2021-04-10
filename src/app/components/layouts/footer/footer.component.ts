import { NgForm, Form, Validators, FormGroup, FormControl } from '@angular/forms';
// import { FlashMessagesService } from 'flash-messages-angular';
import { NotificationsService } from 'angular2-notifications';
import { GeneralService } from 'src/app/services/general.service';
import { Component, OnInit } from '@angular/core';
// import { Form, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public message: string = "";
    // public form: any;
    // public showMessage: boolean = false;
    // public messageClass: string = 'success';
    // // public newsletterForm = new FormGroup({
    //     // email: this.email
    // });
    constructor(private generalService: GeneralService, private notificationsService: NotificationsService) {
    }

    ngOnInit(): void {
        // this.flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 10000 });
    }
    newsletterForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });

    newsletterSubscribe() {
        if (this.newsletterForm.valid) {
            // console.log(this.newsletterForm.value);
            // return;
            this.generalService.newsletterSubscribe(this.newsletterForm.value)
                .subscribe(res => {
                    console.log(res);

                    if (res.status == 201) {
                        this.message = "Thanks for subscribing.";
                        this.notificationsService.success('', this.message);
                    } else if (res.body.code == 11000) {
                        this.message = "Already subscribed.";
                        this.notificationsService.error(null, this.message);
                    } else {
                        this.message = "Error occurred.";
                    }
                },
                    error => {
                        console.log(error.message);
                        // this.notificationsService.error("Error", error.message)
                    }
                )
                ;
        }
    }
    appointmentForm = new FormGroup({
        name: new FormControl(''),
        mobile: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl('')
    });

    bookAppointment() {
        if (this.appointmentForm.valid) {
            // console.log(this.appointmentForm.value);
            // return;
            this.generalService.appointmentSubscribe(this.appointmentForm.value)
                .subscribe(res => {
                    console.log(res);

                    if (res.status == 201) {
                        this.message = "Appointment Booked.";
                        this.notificationsService.success('', this.message);
                    } else {
                        this.message = "Error occurred.";
                    }
                },
                    error => {
                        console.log(error.message);
                        // this.notificationsService.error("Error", error.message)
                    }
                )
                ;
        }
    }


    closeMessage() {
        //   this.showMessage = false;
    }
}
