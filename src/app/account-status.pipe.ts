import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountStatus'
})
export class AccountStatusPipe implements PipeTransform {

  transform(accounts: any, filter: number): any {
    if (!filter && filter !== 0) {
      return accounts;
    }
    return accounts.filter(account => account.AccountStatusId === filter);
  }

}
