import { Component } from '@angular/core';
import {RedditAPIService} from './RedditAPI.service';
import {SubReddit} from './Subreddit';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RedditAPIService]
})
export class AppComponent {
  reddit: SubReddit ={} as SubReddit
  title = 'RedditAPIApp';
  topPost: SubReddit = this.getPost('aww', 1);
  hidePost: boolean= true;

  togglePost(){
    this.hidePost = !this.hidePost,
    this.changeHidden();
  }

  changeHidden(){
    this.styleList = {
      'display': this.hidePost ? 'none' : 'block'
    }
  }
  styleList : object ={
    'display': this.hidePost ? 'none' : 'block'

  }


  constructor(private api: RedditAPIService){}

getPost(sub:string, slice:number): SubReddit{
let response = this.api.getPosts(sub);
console.log(response);

 return response.subscribe(
  (postlist: SubReddit) => this.reddit = 
  {kind: postlist.kind, data: postlist.data});



}


}

