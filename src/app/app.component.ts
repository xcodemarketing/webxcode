import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WebxcodewordService } from './webxcodeword.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '800';
  xcode = 'Bienvenidos a';
  swidth = document.body.offsetWidth;
  company = 'XCode Marketing';
  posts$: Observable<any[]>;

  constructor(private wp: WebxcodewordService) {
    this.posts$ = this.wp.getPosts();
  }
}
