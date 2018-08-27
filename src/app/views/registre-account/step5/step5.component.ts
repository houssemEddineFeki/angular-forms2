import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  submitted: boolean
  step5Form: FormGroup
  question1: FormControl
  answer1: FormControl
  question2: FormControl
  answer2: FormControl
  constructor(private router: Router) {
    this.submitted = false
    this.question1 = new FormControl('', [Validators.required])
    this.answer1 = new FormControl('', [Validators.required, Validators.maxLength(100)])
    this.question2 = new FormControl('', [Validators.required])
    this.answer2 = new FormControl('', [Validators.required, Validators.maxLength(100)])
    this.step5Form = new FormGroup({
      question1: this.question1,
      answer1: this.answer1,
      question2: this.question2,
      answer2: this.answer2
    })
  }
  ngOnInit(): void {
  }
  nextStep5(formValue) {
    this.submitted = true;
    console.log(formValue)
    if (this.step5Form.valid) {
      this.router.navigate(['/register-account/step1'])
    }
  }
}
