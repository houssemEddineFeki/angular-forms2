import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  submitted: boolean 
  EmploymentForm: FormGroup
  employType: FormControl
  employerName: FormControl
  typeOfPos: FormControl
  sameAShomeCheck: FormControl
  streetNoEMP: FormControl
  streetNameEMP: FormControl
  cityEMP: FormControl
  provinceEMP: FormControl
  PostalCodeEMP: FormControl
  position: FormControl
  businessType: FormControl
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.submitted = false
    this.employType = new FormControl('', Validators.required)
    this.employerName = new FormControl('', Validators.required)
    this.typeOfPos = new FormControl('', Validators.required)
    this.sameAShomeCheck = new FormControl('', Validators.required)
    this.streetNoEMP = new FormControl('', Validators.required)
    this.streetNameEMP = new FormControl('', Validators.required)
    this.cityEMP = new FormControl('', Validators.required)
    this.provinceEMP = new FormControl('', Validators.required)
    this.PostalCodeEMP = new FormControl('', Validators.required)
    this.position = new FormControl('', Validators.required)
    this.businessType = new FormControl('', Validators.required)
    this.EmploymentForm = new FormGroup({
      employType: this.employType,
      employerName: this.employerName,
      typeOfPos: this.typeOfPos,
      sameAShomeCheck: this.sameAShomeCheck,
      streetNoEMP: this.streetNoEMP,
      streetNameEMP: this.streetNameEMP,
      cityEMP: this.cityEMP,
      provinceEMP: this.provinceEMP,
      PostalCodeEMP: this.PostalCodeEMP,
      position: this.position,
      businessType: this.businessType,
    })
  }
  EmploymentSub(formValue){
    this.submitted = true;
    if (this.EmploymentForm.valid) {
      this.router.navigate(['/build-profile/home-profile'])
    }
  }
  checkedBox(): boolean{
    if(this.sameAShomeCheck.dirty)
    {
      return this.sameAShomeCheck.value === true
    }
    return false
  }
  isWorker(): boolean{
    return (this.employType.value === "Employed" || this.employType.value === "SelfEmployed")
  }

}