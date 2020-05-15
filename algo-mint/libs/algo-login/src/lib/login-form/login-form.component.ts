import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router } from '@angular/router';

@Component({
  selector: 'algo-mint-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form = new FormGroup({});
  model;
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        appearance: 'fill',
        type: 'text',
        label: 'Enter Username or Email',
        placeholder: 'Enter Username or Email',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        appearance: 'fill',
        type: 'password',
        label: 'password',
        placeholder: 'password',
        required: true
      }
    }
  ];

  emailVerificationMessage: boolean = false;
  verifyPassword: boolean;
  message: any;

  constructor(private _router: Router) {}

  submit() {
    debugger;
    const email = this.form.value.username;
    const password = this.form.value.password;

    this._router.navigate(['dashboard']);
    // this.cognito.signIn(email, password).subscribe(
    //   data => {
    //     this._router.navigate(['dashboard']);
    //   },
    //   err => {
    //     this.emailVerificationMessage = true;
    //     this.message = err
    //   }
    // );
  }
}
