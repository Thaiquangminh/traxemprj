import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  // confirm password
  mustMatch = (password: any, compassword: any) => {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const compasswordControl = formGroup.controls[compassword]

      if(compasswordControl.value !== passwordControl.value) {
        compasswordControl.setErrors({MustMatch: 'valid'})
      }
      else {
        compasswordControl.setErrors(null)
      }
    }
  }



  formData = this._formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(3)],
    ],
    username: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]
    ],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],
    checkPassword: ['', [Validators.required]],
    checkbox: ['', Validators.requiredTrue],
  }, {
    validators: this.mustMatch('password', 'checkPassword')
  });

  constructor(
    private router: Router,
    private _commonServices: CommonService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(
      this.formData.controls['checkPassword'].getError('requỉred')

    );
  }





  handleSubmit = () => {
    this._commonServices.onSubmit(this.formData);
    // this.router.navigate(['/main/login'])
    console.log(this.formData);
  };
  ngOnDestroy(): void {}
}
