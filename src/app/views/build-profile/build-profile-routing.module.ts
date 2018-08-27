import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildProfileComponent } from './build-profile.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { EmploymentComponent } from './home-profile/employement/employment.component';
import { FinancialComponent } from './home-profile/financial/financial.component';
import { CitizenshipComponent } from './home-profile/Citizenship/citizenship.component';
import { PersonalComponent } from './home-profile/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: BuildProfileComponent,
    data: {
      title: 'Build-Account'
    },/*
    children: [{
      path: 'step1',
      loadChildren: './step1/step1.module#Step1Module'
      }
    ]*/
  },
  {path: 'home-profile',component: HomeProfileComponent},
  {path: 'personal',component: PersonalComponent},
  {path: 'employment',component: EmploymentComponent},
  {path: 'financial',component: FinancialComponent},
  {path: 'citizenship',component: CitizenshipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildProfileRoutingModule {}
