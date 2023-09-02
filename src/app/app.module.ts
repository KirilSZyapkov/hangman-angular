import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HangmanDrawingComponent } from './components/hangman-drawing/hangman-drawing.component';
import { HangmanWordComponent } from './components/hangman-word/hangman-word.component';
import { KeybordComponent } from './components/keybord/keybord.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanDrawingComponent,
    HangmanWordComponent,
    KeybordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
