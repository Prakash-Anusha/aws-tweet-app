import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  userLoginDetails: UserDetails;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this. userLoginDetails = new UserDetails;
  }

  //Method to invoke login service to login user
  loginUser() {
    this.loginService.validateLoginCredentials(this.userLoginDetails)
      .subscribe(
        response => {
          
          // set loginId, firstName and lastName in local storage
          localStorage.setItem('loginId', response.loginId);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
          localStorage.setItem('authorized', 'true');
          localStorage.setItem('loggedInUser', response);

          this.router.navigate(['/home']);
        },
        error => {
          handleError(error);
        }
      )
  }
}

// Function to handle service error
function handleError(error: any) {
  if(error.status == '404') {
    alert("This loginId is not registered. Please register yourself and login again.");
  }
  else if(error.status == '401') {
    alert("Password entered is incorrect. Please try again.");
  }
  else {
    alert("Server is down. Please try after some time.");
  }
}

