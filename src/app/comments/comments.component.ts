import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'comments',
  templateUrl: './comment.html',
  styleUrls: ['./comments.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  children: any;
  title: string;
  constructor(private http: Http,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let pId;
    this.route.params.forEach((params: Params) => {
      console.log(params);
      if (params['id'] !== undefined) {
        pId = params['id'];
        console.log(pId);
      }
    })
    this.http.get('/api/comments/' + pId)
                            .subscribe((res) => {
                                this.comments = res.json().data;
                                this.children = this.comments.children;
                                this.title = this.comments.title;
                                console.log('hi', this.comments);
                            });

}
}
