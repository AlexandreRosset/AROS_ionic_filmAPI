import { Component, OnInit } from '@angular/core';
import {OMDBService} from '../services/omdb.service';
import {FullFilm} from '../Types/recherche-films';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string;
  film: FullFilm;
  constructor(public api: OMDBService, private route: ActivatedRoute) { }
  async recherchefilm() {
    this.api.getfilm(this.id)
        .subscribe(res => {
          console.log(res);
          this.film = res;
        }, err => {
          console.log(err);
        });
  }
  fallback() {
    this.film.Poster = 'https://zdnet1.cbsistatic.com/hub' +
        '/i/2016/12/21/f110acb4-81a4-450b-b1cf-7' +
        '96277bdc0f3/ddfb9d5d91f226bd6ad19e160168e95f/bw-no-data.png';
  }
  posterURL() {
    return 'http://img.omdbapi.com/?apikey=75522b56&i=' + this.film.imdbID;
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recherchefilm();
  }

}
