import { Component } from '@angular/core'; // Import the Component decorator


@Component({ // Decorator
  selector: 'app-root', // Selector for the HTML element
  templateUrl: './app.component.html',  // HTML template
  styleUrls: ['./app.component.css'] // CSS styles
})

export class AppComponent { // Export the class
  title = 'cursoAngular'; // Title of the app
}
