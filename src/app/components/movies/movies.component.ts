import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public title: string;

  constructor() {

    this.title = 'Hola Mundo';

  
   }

  ngOnInit(): void {
  }

}
