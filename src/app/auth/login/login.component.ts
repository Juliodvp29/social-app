import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/models/IResponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private authServer: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authServer.login(this.loginForm.value).subscribe((data: IResponse) => {
      console.log(data);
      console.log(this.loginForm.value)
      if(data.status){
        this.router.navigate(['/home']);
      }else{
        console.log(data.result)
      }
    })
  }

}
