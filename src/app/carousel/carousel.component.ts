import { Component, Input, OnInit} from "@angular/core";
import { NasaApiService } from '../services/nasa-api.services';
import {Router } from '@angular/router';

import {
  fadeIn,
  fadeOut,
} from "./carousel.animations";
import { trigger, transition, useAnimation } from "@angular/animations";


@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("carouselAnimation", [
      transition(":enter", [useAnimation(fadeIn)]),
      transition(":leave", [useAnimation(fadeOut)]),
    ])
  ]
})

export class CarouselComponent implements OnInit {
  @Input() slides!:any[];

  currentSlide = 0;
  showDetails = false;

  constructor(private nasaApiService: NasaApiService,private router: Router) {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  
  onRefresh() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.getImagesFromNasa();
  }
  onImageClick(hdurl: string) {
    window.open(hdurl, '_blank');
  }
  getImagesFromNasa() {
    this.nasaApiService.getNasaImages(3)
      .subscribe(images => {
        this.slides = images.map(image => ({
          url: image.url,
          hdurl:image.hdurl,
          title: image.title,
          explanation: image.explanation,
          copyright: image.copyright,
          date: image.date
        }));
      });
  }
  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
}