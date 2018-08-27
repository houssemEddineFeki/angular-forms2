import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAccountComponent } from './register-account.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterAccountComponent,
    data: {
      title: 'Register-Account'
    },/*
    children: [{
      path: 'step1',
      loadChildren: './step1/step1.module#Step1Module'
      }
    ]*/
  },
  {path: 'step1',component: Step1Component},
  {path : 'step2', component: Step2Component},
  {path : 'step3', component: Step3Component},
  {path : 'step4', component: Step4Component},
  {path : 'step5', component: Step5Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAccountRoutingModule {}
