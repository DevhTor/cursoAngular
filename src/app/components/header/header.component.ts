import { Component, OnInit } from '@angular/core'; // Import the Component decorator and OnInit interface

@Component({  // Decorator
  selector: 'app-header', // Selector for the HTML element
  templateUrl: './header.component.html', // HTML template
  styleUrls: ['./header.component.css'] // CSS styles
})

export class HeaderComponent implements OnInit { // export the class

  constructor() { } // Constructor

  ngOnInit(): void { // Initialize the component
  }

}
