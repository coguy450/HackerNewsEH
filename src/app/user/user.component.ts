import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {
  userData: any;
  uId: string;
  userStories: any;
  loaded: boolean;
  constructor(private http: Http,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.uId = params['id'];
      }
    })
    this.http.get('/api/user/' + this.uId)
                            .subscribe((res) => {
                                this.loaded = true;
                                this.userData = res.json().data;
                                console.log('hi', this.userData);
                                this.userStories = this.userData.hits.slice(0,5);
                            });

 }
}
