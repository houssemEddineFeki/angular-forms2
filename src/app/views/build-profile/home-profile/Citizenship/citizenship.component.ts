import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'citizenship',
  templateUrl: './citizenship.component.html',
  styleUrls: ['./citizenship.component.css']
})
export class CitizenshipComponent implements OnInit {
  submitted: boolean
  CitizenshipForm: FormGroup
  country: FormControl
  spouseCountry: FormControl
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.submitted = false
    this.country = new FormControl('', Validators.required)
    this.spouseCountry = new FormControl('', Validators.required)
    this.CitizenshipForm = new FormGroup({
      country: this.country,
      spouseCountry: this.spouseCountry,
    })

  }
  CitizenshipSub(formValue) {
    this.submitted = true;
    if (this.CitizenshipForm.valid) {
      this.router.navigate(['/build-profile/home-profile'])
    }
  }
}