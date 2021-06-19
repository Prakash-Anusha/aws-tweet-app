import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordService } from 'src/app/services/change-password.service';
import { OldPasswordService } from 'src/app/services/old-password.service';


@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent implements OnInit {

  disablePasswordChange: boolean = true;
  changePasswordForm: FormGroup;

  constructor(
    private validateOldPasswordService: OldPasswordService,
    private changePasswordService: ChangePasswordService,
    private fb: FormBuilder
  ) {

    this.changePasswordForm = this.fb.group({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  initiatePasswordChange() {
    this.validateOldPasswordService
      .oldPasswordValidationService(this.changePasswordForm.get('oldPassword').value)
      .subscribe(
        response => {
          this.changePasswordService.changeUserPassword(this.changePasswordForm.get('newPassword').value)
            .subscribe(
              response => {
                alert('Password changed successfully');
              },
              error => {
                alert('Error encountered during service. Please try again later.')
              }
            )
        },
        error => {
          alert("Old password entered is incorrect.")
        }
      )
  }

}


