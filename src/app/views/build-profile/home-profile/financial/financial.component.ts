import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {7
  submitted: boolean 
  FinancialForm: FormGroup
  netWorth: FormControl
  annIncome: FormControl
  experience: FormControl
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.submitted = false
    this.netWorth = new FormControl('', Validators.required)
    this.annIncome = new FormControl('', Validators.required)
    this.experience = new FormControl('', Validators.required)
    this.FinancialForm = new FormGroup({
      netWorth: this.netWorth,
      annIncome: this.annIncome,
      experience: this.experience,
    })
  }
  FinancialSub(formValue){
    this.submitted = true;
    if (this.FinancialForm.valid) {
      this.router.navigate(['/build-profile/home-profile'])
    }
  }

}