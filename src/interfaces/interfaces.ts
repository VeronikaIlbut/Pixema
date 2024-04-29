export interface Movies {
    Title: string;
    Year: string;
    Type: string;
    imdbID: string;
    Poster: string;
    Genre: string;
}

export interface MoviesParams {
    titleFilm: string;
    page: number;
}

export interface MoviesState {
    films: Movies[];
    status: string | null;
    error: string | null;
}

export interface MovieResp {
    Search: Movies[];
    response: string;
    totalResults: string;
}

export interface TrendState {
    trends: Movies[];
    status: string | null;
    error: string | null;
}









export interface MovieInfo {
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
    Ratings: MovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
}

export interface MovieRating {
    Value: string;
    Source: string;
}


export interface FilmState {
    selectedFilm: MovieInfo | null;
    status: string | null;
    error: string | null;
}





