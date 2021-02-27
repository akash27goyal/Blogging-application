import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuardService as AuthenticationGuard } from './services/authenticationGuard.service';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', component: ViewBlogComponent, canActivate: [AuthenticationGuard]},
            { path: 'blog/add/:id', component: BlogComponent, canActivate: [AuthenticationGuard]},
            { path: 'blog/edit/:id', component: BlogComponent, canActivate: [AuthenticationGuard]}
        ]        
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
