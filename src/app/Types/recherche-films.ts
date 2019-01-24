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
}
