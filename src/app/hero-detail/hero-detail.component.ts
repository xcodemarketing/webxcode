import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  swidth = document.body.offsetWidth;
  titulo = 'XCode Marketing';
  descripcion = 'Conectate a tus clientes de una nueva manera';
  cta = 'Contáctanos para más';

  constructor() { }

  ngOnInit() {
  }

}
