import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }      from '@angular/router';

@Component({
  selector: 'account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css']
})
export class AccountOptionsComponent implements OnInit {

  readonly:boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.readonly = !!this.route.snapshot.url.length;

  }

}
