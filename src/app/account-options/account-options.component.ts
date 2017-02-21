import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { Observable }       from 'rxjs/Observable';

import { GigyaService } from '../gigya.service';

@Component({
  selector: 'account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css'],
  providers: [ GigyaService ]
})
export class AccountOptionsComponent implements OnInit {

  readonly:boolean;

  data: Observable<string[]>;

  constructor(private route: ActivatedRoute, private service: GigyaService) { }

  ngOnInit() {
    this.readonly = !!this.route.snapshot.url.length;
    this.data = this.service.getAccountOptions();
  }

}
