import {Component, Input} from '@angular/core';
import {Post} from "../models/Post";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() post: Post;

  constructor() {
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1
    }
  }

  upvote(post: Post) {
      post.votes += 1;
  }

  downvote(post: Post) {
      post.votes -= 1;
  }
}
