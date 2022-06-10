import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUserAuth } from '../models/IUserAuth';
import { ILogin } from '../models/ILogin';
import { IResponse } from '../models/IResponse';
import { IUsuario } from '../models/IUser';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000/api/auth';

  private usuarioSubject?: BehaviorSubject<IUserAuth>;
  public usuarioObserv: Observable<IUserAuth>

  public get usuario(): IUserAuth {
    return this.usuarioSubject!.value;
  }

  constructor(private http: HttpClient) { 
    this.usuarioSubject = new BehaviorSubject<IUserAuth>(JSON.parse(localStorage.getItem('usuario')!));
    this.usuarioObserv = this.usuarioSubject.asObservable();
  }


  // LOGIN
  login(login: ILogin): Observable<IResponse>{
    return this.http.post<IResponse>(`${this.url}/login`, login, httpOptions)
    .pipe(
      map(res => {
        if(res.status){
          const user: IUserAuth = res.result;
          localStorage.setItem('usuario', JSON.stringify(user));
          this.usuarioSubject?.next(user);
        }
          return res;
      })
    )
  }
  // REGISTER
  register(user: IUsuario): Observable<IResponse>{
    return this.http.post<any>(`${this.url}/register`, user)
  }

  // LOGOUT

  logout() {
    localStorage.removeItem('usuario');
    this.usuarioSubject?.next(null!);
  }
}
