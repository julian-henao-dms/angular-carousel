import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { CarouselItem } from 'src/app/models/carousel-item-metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
carouselData: CarouselItem[] = CAROUSEL_DATA_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
