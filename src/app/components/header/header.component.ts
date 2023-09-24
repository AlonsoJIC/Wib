import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    gsap.from(".navbar", {
    duration: 3,
    y: -40,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.2
  });
  }
}
