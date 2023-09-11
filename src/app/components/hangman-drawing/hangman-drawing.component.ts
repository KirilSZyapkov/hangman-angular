import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-drawing',
  templateUrl: './hangman-drawing.component.html',
  styleUrls: ['./hangman-drawing.component.css'],
})
export class HangmanDrawingComponent {
  @Input() incorrectLetters: number = 0;

   body_parts: string[] = [
    "head",
    "body",
    "left-arm",
    "right-arm",
    "left-leg",
    "right-leg"
  ];
}