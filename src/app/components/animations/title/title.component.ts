import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.animated-text'), 'hidden-text');
    }, 500);
  }
}
