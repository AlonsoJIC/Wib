import { Component, OnInit} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit{
  ngOnInit(): void {
    const ID = "bongo-cat";
    const s = (selector: string) => `#${ID} ${selector}`;
    const notes = Array.from(document.querySelectorAll(".note"));

    for (let note of notes) {
      note?.parentElement?.appendChild(note.cloneNode(true));
      note?.parentElement?.appendChild(note.cloneNode(true));
    }

    const music = { note: s(".music .note") };
    const cat = {
      pawRight: {
        up: s(".paw-right .up"),
        down: s(".paw-right .down"),
      },
      pawLeft: {
        up: s(".paw-left .up"),
        down: s(".paw-left .down"),
      },
    };

    const style = getComputedStyle(document.documentElement);

    const green = style.getPropertyValue("--green");
    const pink = style.getPropertyValue("--pink");
    const blue = style.getPropertyValue("--blue");
    const orange = style.getPropertyValue("--orange");
    const cyan = style.getPropertyValue("--cyan");

    gsap.set(music.note, { scale: 0, autoAlpha: 1 });

    const animatePawState = (selector: string) =>
      gsap.fromTo(
        selector,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.01,
          repeatDelay: 0.19,
          yoyo: true,
          repeat: -1,
        }
      );

    const tl = gsap.timeline();

    tl.add(animatePawState(cat.pawLeft.up), "start")
      .add(animatePawState(cat.pawRight.down), "start")
      .add(animatePawState(cat.pawLeft.down), "start+=0.19")
      .add(animatePawState(cat.pawRight.up), "start+=0.19")
      .timeScale(1.6);

    const lines = document.querySelectorAll(".terminal-code line");

    function animateLine(line: SVGLineElement) {
      const length = line.getTotalLength();
      line.style.strokeDasharray = String(length);
      line.style.strokeDashoffset = String(length);

      const animation = line.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        {
          duration: 2000,
          easing: "linear",
          iterations: Infinity,
        }
      );

      return animation;
    }

    lines.forEach((line, index) => {
      const delay = index * 200;
      setTimeout(() => {
        animateLine(line as SVGLineElement);
      }, delay);
    });

    const noteElFn: Function = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
    const noteEls: HTMLElement[] = noteElFn(music.note);

    const numNotes = noteEls.length / 3;
    const notesG1 = noteEls.splice(0, numNotes);
    const notesG2 = noteEls.splice(0, numNotes);
    const notesG3 = noteEls;

    const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
    const rotator = gsap.utils.random(-50, 50, 1, true);
    const dir = (amt: number) => `${gsap.utils.random(["-", "+"])}=${amt}`;

    const animateNotes = (els: HTMLElement[]): GSAPTween => {
      els.forEach((el) => {
        gsap.set(el, {
          stroke: colorizer(),
          rotation: rotator(),
          x: gsap.utils.random(-25, 25, 1),
        });
      });

      return gsap.fromTo(
        els,
        {
          autoAlpha: 1,
          y: 0,
          scale: 0,
        },
        {
          duration: 2,
          autoAlpha: 0,
          scale: 1,
          ease: "none",
          stagger: {
            from: "random",
            each: 0.5,
          },
          rotation: dir(gsap.utils.random(20, 30, 1)),
          x: dir(gsap.utils.random(40, 60, 1)),
          y: gsap.utils.random(-200, -220, 1),
          onComplete: () => {
            // Puedes realizar acciones adicionales aquí cuando se complete la animación.
          },
        }
      );
    }

    tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");
  }
}

