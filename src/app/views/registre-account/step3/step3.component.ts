import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IAccount } from '../account';
import { Router } from '@angular/router';

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
