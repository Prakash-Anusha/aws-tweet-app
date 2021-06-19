import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TweetCardComponent } from './ui-components/tweet-card/tweet-card.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { MyTweetsPageComponent } from './pages/my-tweets-page/my-tweets-page.component';


import { HttpClientModule } from '@angular/common/http';
import { AllUsersPageComponent } from './pages/all-users-page/all-users-page.component';
import { UserDetailsCardComponent } from './ui-components/user-details-card/user-details-card.component';
import { PostTweetCardComponent } from './ui-components/post-tweet-card/post-tweet-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { TweetCommentCardComponent } from './ui-components/tweet-comment-card/tweet-comment-card.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginCardComponent } from './ui-components/login-card/login-card.component';
import { RegisterCardComponent } from './ui-components/register-card/register-card.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TweetCardComponent,
    NavbarComponent,
    MyTweetsPageComponent,
    AllUsersPageComponent,
    UserDetailsCardComponent,
    PostTweetCardComponent,
    TweetCommentCardComponent,
    LoginPageComponent,
    LoginCardComponent,
    RegisterCardComponent,
    ChangePasswordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
