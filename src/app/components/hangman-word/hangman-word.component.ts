import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: ['./hangman-word.component.css'],
})
export class HangmanWordComponent {
 
  @Input() word: string[] = [];
  @Input()guessedLetters: string[] = [];

 
}
