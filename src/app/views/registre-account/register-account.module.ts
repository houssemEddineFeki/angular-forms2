// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterAccountComponent } from './register-account.component';
import { RegisterAccountRoutingModule } from './register-account-routing.module';
import { AccountService } from './shared/acount.service';
import { HttpClientModule } from '@angular/common/http';
import { Step1Module } from './step1/step1.module';
import { Step2Module } from './step2/step2.module';
import { Step3Module } from './step3/step3.module';
import { Step4Module } from './step4/step4.module';
import { Step5Module } from './step5/step5.module';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        Step1Module,
        Step2Module,
        Step3Module,
        Step4Module,
        Step5Module,
        RegisterAccountRoutingModule
    ],
    declarations: [
        RegisterAccountComponent,
    ],
    providers: [
        AccountService
    ]
  })
  export class RegisterAccountModule { }
  