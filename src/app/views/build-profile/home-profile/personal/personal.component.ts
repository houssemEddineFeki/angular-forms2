import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  submitted: boolean 
  PersonalForm: FormGroup
  firstName: FormControl
  middleName: FormControl
  lastName: FormControl
  email: FormControl
  birthDate: FormControl
  phoneNumber: FormControl
  sin: FormControl
  streetNoH: FormControl
  streetNameH: FormControl
  cityH: FormControl
  provinceH: FormControl
  PostalCodeH: FormControl
  spouseName: FormControl
  dependents: FormControl
  sameAShomeCheck: FormControl
  streetNoM: FormControl
  streetNameM: FormControl
  cityM: FormControl
  provinceM: FormControl
  PostalCodeM: FormControl
  maritalStat: FormControl
  dayB: FormControl
  mounthB: FormControl
  yearB: FormControl
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
    this.middleName = new FormControl('', Validators.required)
    this.lastName = new FormControl('', Validators.required)
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.phoneNumber = new FormControl('', Validators.required)
    this.birthDate = new FormControl('', Validators.required)
    this.sin = new FormControl('', Validators.required)
    this.streetNoH = new FormControl('', Validators.required)
    this.streetNameH = new FormControl('', Validators.required)
    this.cityH = new FormControl('', Validators.required)
    this.provinceH = new FormControl('', Validators.required)
    this.PostalCodeH = new FormControl('', Validators.required)
    this.dependents = new FormControl('', Validators.required)
    this.spouseName = new FormControl('', Validators.required)
    this.sameAShomeCheck = new FormControl('')
    this.streetNoM = new FormControl('', Validators.required)
    this.streetNameM = new FormControl('', Validators.required)
    this.cityM = new FormControl('', Validators.required)
    this.provinceM = new FormControl('', Validators.required)
    this.PostalCodeM = new FormControl('', Validators.required)
    this.maritalStat = new FormControl('', Validators.required)
    this.dayB = new FormControl('', Validators.required)
    this.mounthB = new FormControl('', Validators.required)
    this.yearB = new FormControl('', Validators.required)
    this.PersonalForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      middleName: this.middleName,
      birthDate: this.birthDate,
      sin: this.sin,
      streetNoH: this.streetNoH,
      streetNameH: this.streetNameH,
      cityH: this.cityH,
      provinceH: this.provinceH,
      PostalCodeH: this.PostalCodeH,
      spouseName: this.spouseName,
      dependents: this.dependents,
      sameAShomeCheck: this.sameAShomeCheck,
      streetNoM: this.streetNoM,
      streetNameM: this.streetNameM,
      cityM: this.cityM,
      provinceM: this.provinceM,
      PostalCodeM: this.PostalCodeM,
      maritalStat: this.maritalStat,
      dayB: this.dayB,
      mounthB: this.mounthB,
      yearB: this.yearB,
    })    
  }
  personalSub(formValue){
    this.submitted = true;
    if (this.PersonalForm.valid) {
      this.router.navigate(['/build-profile/home-profile'])
    }
  }
  generateArray(n: number, startFrom: number): number[]
     {
       return Array(n).fill(0).map((x,i)=>i + startFrom)
     }
  checkedBox(): boolean{
    if(this.sameAShomeCheck.dirty)
    {
      return this.sameAShomeCheck.value === true
    }
    return false
  }
  
     
}