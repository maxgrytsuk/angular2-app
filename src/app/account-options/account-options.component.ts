import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { GigyaApiService } from '../gigya-api.service';

@Component({
  selector: 'account-options',
  templateUrl: './account-options.component.html',
  styleUrls: [
    './account-options.component.css'
  ],
  providers: [ GigyaApiService ]
})
export class AccountOptionsComponent implements OnInit {

  readonly: boolean;

  isAlertVisible: boolean = false;

  model: any;

  message: string;

  loginIdentifierConflicts: [any] = [
    {
      name:'Ignore', value: 'ignore'
    },
    {
      name:'Fail On Site Conflicting Identity', value: 'failOnSiteConflictingIdentity'
    },
    {
      name:'Fail on any conflicting identity', value: 'failOnAnyConflictingIdentity'
    }
  ];

  constructor(private route: ActivatedRoute, private service: GigyaApiService) { }

  ngOnInit() {
    this.readonly = !!this.route.snapshot.url.length;
    this.service.getPolicies()
      .then( data => this.model = data.accountOptions );
  }

  onSubmit(form, data) {
    if (form.valid) {
      this.service.setPolicies({paramName:'accountOptions', data: data})
        .then( res => {
          this.isAlertVisible = true;
          this.message = res.errorCode === 0?'Account options were saved':res.errorMessage;
          setTimeout(() => { this.isAlertVisible = false; }, 1000);
        } );
    }
  }

}
