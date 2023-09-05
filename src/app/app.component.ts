import { Component } from '@angular/core';
import { words } from 'word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangman';
  word: string[] = words[Math.floor(Math.random()*words.length)].split("");
  guessedLetters: string[] = ['t', 's', 'g'];

}
