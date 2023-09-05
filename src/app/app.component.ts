import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangman';
  word: string[] = ['t', 'e', 's', 't',"e", "r"];
  guessedLetters: string[] = ['t', 's', 'g'];

}
