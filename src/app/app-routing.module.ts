import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './users/create/create.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/users/create',
   pathMatch:'full'
  },
  {
    path:'users',
    loadChildren:()=>import('./users/users.module').then(mod=>mod.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
