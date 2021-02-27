import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuardService } from './services/authenticationGuard.service';
import { AuthService } from './services/authentication.service';
import { BlogService } from './services/blog.service';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { DatePipe } from '@angular/common'
import { CustomErrorHandler } from './services/custom-error-handler.service';
import { AlertService } from './services/alert.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        BlogComponent,
        ViewBlogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [AuthService, AuthGuardService, BlogService, DatePipe, AlertService,
        {
            provide: ErrorHandler,
            useClass: CustomErrorHandler,
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
