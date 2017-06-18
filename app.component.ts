import {Component} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'my-app',
    template: `
               <h2><heart [totalLikes] = "tweet.totalLikes" [iLike] = "tweet.iLike"></heart></h2>
               <h1><b>
               Twitter Like Button
               </b>
               </h1>
             `,
    directives:[HeartComponent],
})
export class AppComponent { 
    tweet = {
        totalLikes: 10,
        iLike: false
    }
}