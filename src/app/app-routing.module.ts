import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';


const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'chat-with-support-bot' },]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = []
