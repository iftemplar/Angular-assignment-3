import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .colored{
    background-color: blue;
    color: white;
  }
  `]
})
export class AppComponent {
  messageVisible = true;
  timestamps = [];
  i=0;

  onButtonClick() {
    // paragraph with message will be show on a page when 'true'
    this.messageVisible === true ? this.messageVisible = false : this.messageVisible = true;
    // grabs the date in UNIX format
    this.timestamps.push(Date.now());
    console.log(this.timestamps);
    this.i += 1;
    console.log(this.i);
    // this.i >= 5 ? this.theColor = 'blue' : this.theColor = 'black';
  }

  getColor(){
    return this.i >= 5 ? 'blue' : 'black';
  }
}
