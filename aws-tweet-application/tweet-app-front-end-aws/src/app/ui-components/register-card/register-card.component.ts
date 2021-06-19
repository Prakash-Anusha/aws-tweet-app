import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {

  newUser: UserDetails;
 
  registrationForm: FormGroup;
  showElement: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerUserService: RegisterUserService,
    private fb: FormBuilder
  ) { 

    this.registrationForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required, this.validateName
      ]),
     
      lastName: new FormControl('', [
        Validators.required, this.validateName
      ]),
  
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
  
      dateOfBirth: new FormControl('', [
        Validators.required, this.validateDateOfBirthFormat
      ]),
  
      contactNumber: new FormControl('', [
        Validators.required
      ]),
  
      loginId: new FormControl('', [
        Validators.required
      ]),
  
      password: new FormControl('', [
        Validators.required
      ]),
  
      confirmPassword: new FormControl('', [
        Validators.required, this.validateConfirmPassword
      ])
    })

  }

  ngOnInit(): void {
    this.newUser = new UserDetails();
  }

  // Validator method to validate name has only letters
  validateName(control: AbstractControl) {

    if(control && (control.value !== null || control.value !== undefined)) {
      const nameRegEx = new RegExp('^[A-Za-z]+$');

      if(!nameRegEx.test(control.value)) {
        return {
          isError: true
        };
      }
    }

    return null;

  }


  // Validator method to validate date of birth format
  validateDateOfBirthFormat(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {

      const dateOfBirthRegEx = new RegExp('^([0-9]{2})-([0-9]{2})-([0-9]{4})$');

      if(!dateOfBirthRegEx.test(control.value)) {
        return {
          isError: true
        };
      }

    }
    return null;
  }

  // Validator method to check if password and confirmPassword are the same
  validateConfirmPassword(control: AbstractControl) {

    if(control && (control.value !== null || control.value!== undefined)) {
      const confirmPasswordValue  = control.value;
      const passwordControl = control.root.get('password');

      if(passwordControl) {
        const passwordValue = passwordControl.value;
        if(confirmPasswordValue !== passwordValue) {
          return {
            isError: true
          };
        } 
      }
    }
     return null;

  }

  //Method to call register service to register a new user
  registerNewUser() {

    this.newUser = this.registrationForm.value;
    this.registerUserService.registerNewUser(this.newUser).subscribe(
      response => {
        this.showElement = true;
          setTimeout(function () {
             console.log('hide');
            this.showElement = false;
            this.router.navigate(['/login'])
          }.bind(this), 3000);
        },
        
        // this.router.navigate(['/login']);
        // alert("You've registered successfully! PLEASE LOGIN")
      //},
      error => {
        handleError(error);
      }
    )
  }
}

// Method to handle error
function handleError(error: any) {
  if(error.status == '409') {
    
      alert('This loginID or email is already registered. Please try with a different loginId/email.')
      
    }

    else {
      alert('TweetApp service is facing a temporary downtime. Please try after some time.')
    }

  
}

