import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get<Account[]>('https://frontiercodingtests.azurewebsites.net/api/accounts/getall');
  }
}
