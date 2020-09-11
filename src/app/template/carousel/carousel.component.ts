import { Component, OnInit } from '@angular/core';
import { CaroulselItem } from '../../models/carouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  caroulselItems: CaroulselItem[] =
    [
      {
        CaroulselItemId: 1,
        Text: 'UNO',
        Url: '/app/configuracion/basica/planes',
        Image: 'https://s3.amazonaws.com/newfiles.bannersnack.net/lp/150/images/twitch-banner-maker.png',
        Ofert: false,
        OfertPercent: 0,
        Inactive: false,
      },
      {
        CaroulselItemId: 2,
        Text: 'DOS',
        Url: '/app/configuracion/basica/planes',
        Image: 'https://i.ytimg.com/vi/h4CgaXNlwFk/maxresdefault.jpg',
        Ofert: false,
        OfertPercent: 0,
        Inactive: false,
      },
      {
        CaroulselItemId: 3,
        Text: 'TRES',
        Url: '/app/configuracion/basica/planes',
        Image: 'https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-irregular-geometric-creative-gradient-banner-background-image_51434.jpg',
        Ofert: false,
        OfertPercent: 0,
        Inactive: false,
      },
    ]
  constructor() { }

  ngOnInit(): void {
  }
}
