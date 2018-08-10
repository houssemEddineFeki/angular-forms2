import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAccountComponent } from './register-account.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterAccountComponent,
    data: {
      title: 'Register-Account'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAccountRoutingModule {}
