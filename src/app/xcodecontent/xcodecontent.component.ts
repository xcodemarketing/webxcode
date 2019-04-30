import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xcodecontent',
  templateUrl: './xcodecontent.component.html',
  styleUrls: ['./xcodecontent.component.css']
})
export class XcodecontentComponent implements OnInit {
  breakpoint: number;
  swidth = document.body.offsetWidth;
  ctaVentas = 'Aumenta tus ventas aquí';
  ctaServicio = 'Deleita a tus clientes aquí';
  ctaMarketing = 'Atrae más clientes aquí';

  constructor() {
   }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 1;
  }

}
