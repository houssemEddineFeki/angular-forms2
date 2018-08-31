import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IAccount } from '../account';
import { Router } from '@angular/router';

declare var jQuery: any;
declare var $: any;
@Component({
  templateUrl: 'step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  submitted: boolean
  step3Form: FormGroup
  firstName: FormControl
  lastName: FormControl
  email: FormControl
  phoneNumber: FormControl
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $("#phoneNumber").keyup(function (e) {
        if (e.keyCode === 8 || e.keyCode === 37 || e.keyCode === 39) return;

        if ($(this).val().length == 3) {
          $(this).val($(this).val() + "-");
        }
        else if ($(this).val().length == 7) {
          $(this).val($(this).val() + "-");
        }
        else if ($(this).val().length == 14) {
          $(this).val($(this).val() + "-");
        }
      });
    });

    this.submitted = false
    this.firstName = new FormControl('', Validators.required)
    this.lastName = new FormControl('', Validators.required)
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.phoneNumber = new FormControl('', Validators.required)
    this.step3Form = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
    })
  }
  nextStep3(formValue) {
    this.submitted = true;
    if (this.step3Form.valid) {
      this.router.navigate(['/register-account/step4'])
    }
  }
}
