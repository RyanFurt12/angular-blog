import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any[] = []
  
  constructor() {
  }  
  
  pushDataToMovies():void {
    if(this.movies.length>0) return
    this.movies = dataFake

    setTimeout(() => {
      this.pushDataToMovies()
    }, 100);
  }

  ngOnInit(): void {
    this.pushDataToMovies()
  }

}
