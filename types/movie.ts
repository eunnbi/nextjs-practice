export interface MoviesData {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres: MovieGenre[];
  release_date: string;
  homepage: string;
}

export interface MovieGenre {
  id: number;
  name: string;
}
