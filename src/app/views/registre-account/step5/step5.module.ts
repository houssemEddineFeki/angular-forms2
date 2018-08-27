// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/acount.service';
import { Step5Component } from './step5.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        Step5Component
    ],
    providers: [
        AccountService
    ]
  })
  export class Step5Module { }
  