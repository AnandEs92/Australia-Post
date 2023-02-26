import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AustraliaPost';
  openAuthor(){
    window.open('http://www.linkedin.com/in/anand-es-268b78120');
  }
}

