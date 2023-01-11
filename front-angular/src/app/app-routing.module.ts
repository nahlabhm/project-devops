import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
const routes: Routes=[
 
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
},
{
  path:'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'',
      component:WelcomeComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'add-category',
      component:AddCategoriesComponent,
    },
    {
      path:'view-category',
      component:ViewCategoriesComponent,
    },
    {
      path:'view-quiz',
      component:ViewQuizComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent,
    },
     {
      path:'update-quiz/:qid',
      component:UpdateQuizComponent,
    },
  ],
},
{
  path:'user',
  component:UserDashboardComponent,
  canActivate:[NormalGuard],
   children:[
    {
      path:'',
      component:WelcomeUserComponent,
    },
  ],
},
{
  path:'profile',
  component:ProfileComponent,
  pathMatch:'full',
},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

})
export class AppRoutingModule { }
