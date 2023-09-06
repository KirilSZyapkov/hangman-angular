import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keybord',
  templateUrl: './keybord.component.html',
  styleUrls: ['./keybord.component.css'],
})
export class KeybordComponent {
  @Output() keyBordClicked = new EventEmitter();
  keys: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  btnClick(e: Event) {
    const target: any = e.target;
    const letter: string = target.textContent;
    this.keyBordClicked.emit(letter);
  }
}
