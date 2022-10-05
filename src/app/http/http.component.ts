import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export interface POST {
  id: number;
  name: string;
  author: string;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit, OnDestroy {
  posts: POST[] = [];

  getPostSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.getPostSubscription = this.http
      .get('http://localhost:3000/posts')
      .subscribe(
        (res: POST[]) => {
          console.log(res);
          this.posts = res;
        },
        (err: any) => {
          //asdfasdfsd
        }
      );
  }

  ngOnDestroy(): void {
    this.getPostSubscription.unsubscribe();
  }
}
