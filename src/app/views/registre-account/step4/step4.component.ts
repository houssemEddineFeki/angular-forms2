import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';
import { AccountService } from '../shared/acount.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  templateUrl: 'step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  submitted: boolean
  step4Form: FormGroup
  UserID: FormControl
  Password: FormControl
  confPassword: FormControl
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.submitted = false
    this.UserID = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)])
    this.Password = new FormControl('', [Validators.required, Validators.minLength(8)])
    this.confPassword = new FormControl('', [Validators.required, Validators.minLength(8), passwordConfirming])
    this.step4Form = new FormGroup({
      UserID: this.UserID,
      Password: this.Password,
      confPassword: this.confPassword
    })
  }
  nextStep4(formValue) {
    this.submitted = true;
    if (this.step4Form.valid) {
      this.router.navigate(['/register-account/step5'])
    }
  }

}
function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get('Password');
  const cpwd = c.parent.get('confPassword')

  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };

  }
}