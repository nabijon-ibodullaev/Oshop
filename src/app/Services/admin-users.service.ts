import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private HTTP: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.HTTP.get('https://fakestoreapi.com/users');
  }
  deleteuUser(user: any): Observable<any> {
    return this.HTTP.delete('https://fakestoreapi.com/users' + '/' + user.id);
  }
}
