import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorCode: number;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      usuario: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }

  login(){
    this.errorCode = null;
    const observable = this.auth.login(this.formGroup.get('usuario').value,this.formGroup.get('password').value).subscribe(response =>{
      observable.unsubscribe();
      this.errorCode =response.errorCode;
    })
  }

}
