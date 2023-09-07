import { Component, HostListener } from '@angular/core';
import { words } from 'word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.guessedLetters.includes(event.key)) return;
    this.guessedLetters.push(event.key);
    this.incorrectLetter();
  }
  title = 'hangman';
  word: string[] = words[Math.floor(Math.random() * words.length)].split('');

  guessedLetters: string[] = [];
  incorrectLetters: string[] = [];

  guessedLetter(letter: string): void {
    if (this.guessedLetters.includes(letter)) return;

    this.guessedLetters.push(letter);
    this.incorrectLetter();
  }

  incorrectLetter(): void {
    this.incorrectLetters = this.guessedLetters.filter(
      (letter) => !this.word.includes(letter)
    );
  }
  // show(e: Event) {
  //   console.log(e);
  // }
}
