export interface RechercheFilms {
    Search: Array<ShortFilm>;
    totalResults: number;
    page: number;
}
export interface ShortFilm {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Detail: string;
}
export interface FullFilm {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<Rating>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
}
export interface Rating {
    Source: string;
    Value: string;
}
