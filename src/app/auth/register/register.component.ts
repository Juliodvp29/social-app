import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/models/IResponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private authServer: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.authServer.register(this.registerForm.value).subscribe((data: IResponse) => {
      console.log(data);
      console.log(this.registerForm.value)
      if(data.status){
        this.router.navigate(['/login']);
      }else{
        console.log(data.result)
      }
    })
  }
}
