import { AccountStatusId } from './accountStatusId';

export class Account {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  AmountDue: number;
  PaymentDueDate: Date;
  AccountStatusId: AccountStatusId;
}
