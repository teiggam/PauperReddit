import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subreddit } from './Subreddit';


@Injectable()
export class RedditAPIService {
    apiBaseUrl = 'https://www.reddit.com/r/';
    constructor(private http: HttpClient) { }

    getPosts(sub:string): any {
        let url = this.apiBaseUrl+sub+"/.json";
        return this.http.get(url);
    }
}