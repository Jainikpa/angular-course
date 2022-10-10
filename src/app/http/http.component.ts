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
  addPostSubscription: Subscription;
  deleteSubscription: Subscription;
  updateSubscription: Subscription;

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
    this.deleteSubscription.unsubscribe();
    this.addPostSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
  }

  onAddPostClick() {
    const data = {
      name: 'newName',
      author: 'NewAuthor',
    };
    this.addPostSubscription = this.http
      .post('http://localhost:3000/posts', data)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getPosts();
        },
        (err) => {
          console.error(err);
        }
      );
  }

  onDeleteClick(post) {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.deleteSubscription = this.http
      .delete('http://localhost:3000/posts/' + post?.id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getPosts();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onUpdateClick(post) {
    const data = {
      name: 'thisname',
      author: 'thisauthor',
    };

    this.updateSubscription = this.http
      .put('http://localhost:3000/posts/' + post?.id, data)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getPosts();
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
