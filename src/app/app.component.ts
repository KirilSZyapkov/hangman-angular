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
    if (this.guessedLetters.includes(event.key.trim())|| this.isLooser || this.isWinner) return;
    this.addLetters(event.key.trim());
  }

  title = 'hangman';
  whatIsTheWord: string = 'Guess the Word?';
  word: string[] = words[Math.floor(Math.random() * words.length)].split('');
  guessedLetters: string[] = [];
  incorrectLetters: string[] = [];
  activeLetters: string[] = [];
  isWinner: boolean = false;
  isLooser: boolean = false;
  reveil: boolean = false;

  guessedLetter(letter: string): void {
    if (this.guessedLetters.includes(letter.trim())) return;
    this.addLetters(letter);
  }

  incorrectLetter(): void {
    this.incorrectLetters = this.guessedLetters.filter(
      (letter) => !this.word.includes(letter.trim())
    );
  }

  addLetters(letter: string):void {
    this.guessedLetters.push(letter.trim());
    this.activeLetters = this.guessedLetters.filter((l) =>
      this.word.includes(l)
    );

    this.incorrectLetter();

    this.isWinner = this.word.every((l) => this.activeLetters.includes(l));
    this.isLooser = this.incorrectLetters.length >= 6;

    if (this.isLooser) {
      this.whatIsTheWord = 'You loose! Refresh to try again.';
      this.reveil = this.isLooser;

    } else if (this.isWinner) {
      this.whatIsTheWord = 'You won! Refresh to try again.';
    }
  }
}
