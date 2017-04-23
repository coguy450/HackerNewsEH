import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  stories: any;

  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('/api/stories')
                            .subscribe((res) => {
                                this.stories = res.json().data.slice(0,50);
                            });

}
}
