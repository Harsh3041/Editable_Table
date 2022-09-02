import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  sno: number;
  risk: string;
  absolute: string;
  complaint: string;
  rac: string;
  complaint2: string;
  country: string;
  response: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    sno: 1,
    risk: 'KYC/AML',
    absolute: 'Loans can only be availed after completion of KYC/AML forms with no material issues',
    complaint: '',
    rac: '',
    complaint2: '',
    country: '',
    response: ''
  },
  {
    sno: 2,
    risk: 'Compliance with Target market, Geographies, TM Revenue Size and Green or Yellow Industry Segments',
    absolute: '',
    complaint: '',
    rac: 'Must be Target market Exception: See Section 4.2',
    complaint2: '',
    country: '',
    response: ''
  },
  {
    sno: 3,
    risk: 'Assessment of Management',
    absolute: '',
    complaint: '',
    rac: '',
    complaint2: '',
    country: '',
    response: ''
  },
  {
    sno: 4,
    risk: 'Compliance with Environment & Social Risk management Standards',
    absolute: '',
    complaint: '',
    rac: '',
    complaint2: '',
    country: '',
    response: ''
  },
  {
    sno: 5,
    risk: 'Credit Bureau and other Checkings on borrower, owner, gurantor(subject to local pracrice and the information available)',
    absolute: 'No Convictions, No Bankruptcy History, No default on Citi obligations, No unexplained delinquency on Credit Bureau over 60 days ',
    complaint: '',
    rac: 'No Material Late payments or other significant derogatory information',
    complaint2: '',
    country: 'CIBIL',
    response: ''
  },
];

@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'risk', 'absolute', 'complaint','rac','complaint2','country','response'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
