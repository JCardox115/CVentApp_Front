import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/_helpers/must-match-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }
  serverErrorMessages: string;
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      companyname: ['', Validators.required]
    },

      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.loading=true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    
    this.apiService.register(this.registerForm.value).then(
      (res:any) => {
        this.loading =false;
        Swal.fire('Notificación de proceso',res,'success');
        this.router.navigateByUrl('/auth/register');
      }).catch((err: any) => {
        this.loading =false;
        Swal.fire('Notificación',err.error.Message,'warning');
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef }
}
