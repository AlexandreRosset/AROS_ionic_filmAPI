import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OMDBService } from '../services/omdb.service';
import { RechercheFilms, ShortFilm } from '../Types/recherche-films';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datas: RechercheFilms;
  inputfilm: string;
  typefilm: string;
  async recherchefilm() {
      this.api.getfilms(this.inputfilm, 1, this.typefilm)
          .subscribe(res => {
              console.log(res);
              this.datas = res;
              this.datas.page = 1;
              let i = 0;
              while (i < 10 && i < this.datas.Search.length) {
                  this.datas.Search[i].Detail =
                      '/detail/' + this.datas.Search[i].imdbID;
                  i++;
              }
          }, err => {
              console.log(err);
      });
  }
    async rechercheNextfilm() {
        this.api.getfilms(this.inputfilm, this.datas.page, this.typefilm)
            .subscribe(res => {
                console.log(res);
                res.Search.forEach( (film) => {
                    this.datas.Search.push(film);
                    this.datas.Search[this.datas.Search.length - 1].Detail =
                        '/detail/' + this.datas.Search[this.datas.Search.length - 1].imdbID;
                });
            }, err => {
                console.log(err);
            });
    }
  constructor(public api: OMDBService, private router: Router) {
      this.typefilm = 'movie';
  }
  doInfinite(infiniteScroll) {
      console.log('Begin async operation');
      setTimeout(() => {
          if (Math.trunc(this.datas.totalResults / 10) + 1 > this.datas.page) {
              this.datas.page++;
              this.rechercheNextfilm();
          }
          console.log('Async operation has ended');
          infiniteScroll.target.complete();
      }, 2000);
  }
  fallback(event) {
      this.datas.Search[event].Poster = 'https://zdnet1.cbsistatic.com/hub' +
              '/i/2016/12/21/f110acb4-81a4-450b-b1cf-7' +
              '96277bdc0f3/ddfb9d5d91f226bd6ad19e160168e95f/bw-no-data.png';
  }
    go(id) {
        this.router.navigateByUrl('/detail/' + id);
    }
  ngOnInit() {
  }
}
