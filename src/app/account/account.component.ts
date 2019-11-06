import {Component, Input, OnInit} from '@angular/core';
import {AccountStatusId} from '../core/models/accountStatusId';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() Id: number;
  @Input() FirstName: string;
  @Input() LastName: string;
  @Input() Email: string;
  @Input() PhoneNumber: string;
  @Input() AmountDue: string;
  @Input() PaymentDueDate: Date;
  @Input() AccountStatusId: AccountStatusId;

  constructor() { }

  ngOnInit() {
  }

}
