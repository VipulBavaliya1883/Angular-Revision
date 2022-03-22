import { Component, OnInit } from '@angular/core';
import { iMovie } from '../Model/movie';
import { MovieService } from '../service/movie.service'; 

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // myMovies:iMovie=[{
  //   _id:'',
  //   name:'test',
  //   rating:5
  // }];

  // myMovie:iMovie={
  //   _id:'dsfds',
  //   name:'test',
  //   rating:5
  // }

  myMovie:any = [];

  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {

    this._movieService.getMovie().subscribe((data:any)=>{
      this.myMovie = data;
    })

    

  }

  delete(movie:any){
    this._movieService.DeleteMovie(movie).subscribe(data=>{
      console.log(data);

    })
  }

}
