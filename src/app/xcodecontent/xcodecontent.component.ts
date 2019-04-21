import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xcodecontent',
  templateUrl: './xcodecontent.component.html',
  styleUrls: ['./xcodecontent.component.css']
})
export class XcodecontentComponent implements OnInit {
  swidth = document.body.offsetWidth;

  constructor() {
   }

  ngOnInit() {
  }

}
