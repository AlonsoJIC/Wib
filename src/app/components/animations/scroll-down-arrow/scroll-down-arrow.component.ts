import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down-arrow',
  templateUrl: './scroll-down-arrow.component.html',
  styleUrls: ['./scroll-down-arrow.component.scss']
})
export class ScrollDownArrowComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  scrollToContent() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
