import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { GigyaApiService } from '../gigya-api.service';

@Component({
  selector: 'account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css'],
  providers: [ GigyaApiService ]
})
export class AccountOptionsComponent implements OnInit {

  readonly: boolean;
  data: any;

  constructor(private route: ActivatedRoute, private service: GigyaApiService) { }

  ngOnInit() {
    this.readonly = !!this.route.snapshot.url.length;
    this.service.getPolicies()
      .then( data => this.data = data.accountOptions );
  }

}
