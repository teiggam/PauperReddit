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


  constructor(private api: RedditAPIService){}

getPost(sub:string, slice:number){
let response = this.api.getPosts(sub);
console.log(response);

let output = response.subscribe(
  (postlist: SubReddit) => this.reddit = 
  {kind: postlist.kind, data: postlist.data});

  output.splice(0, slice);

}
}

