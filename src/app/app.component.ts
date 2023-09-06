import { Component } from '@angular/core';
import { words } from 'word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'hangman';
  word: string[] = words[Math.floor(Math.random() * words.length)].split('');
  
  guessedLetters: string[] = [];
  incorrectLetters: string[] = this.guessedLetters.filter(
    (letter) => !this.word.includes(letter)
  );

  guessedLetter(letter: string){
    console.log(letter);
    this.guessedLetters.push(letter);
  }
}
