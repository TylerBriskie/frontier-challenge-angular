import { Component, OnInit } from '@angular/core';

import { Account } from '../core/models/account.model';
import { AccountStatusId } from '../core/models/accountStatusId';
import { AccountService } from '../core/services/account.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe((accounts) => {
        this.accounts = accounts;
        console.log('accounts retrieved: ', this.accounts)
      }, (err) => {
        console.log('an error occurred retrieving the accounts from the server: ', err);
      });
  }

}
