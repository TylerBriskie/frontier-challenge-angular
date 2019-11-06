import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountStatus'
})
export class AccountStatusPipe implements PipeTransform {

  transform(accounts: any, filter: number): any {

    return accounts.filter(account => account.AccountStatusId === filter);
  }

}
