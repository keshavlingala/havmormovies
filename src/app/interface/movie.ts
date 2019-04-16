export interface Movie {
  _id: string;
  imdb_id: string;
  title: string;
  year: string;
  synopsis: string;
  runtime: string;
  released: number;
  trailer: string;
  certification: Certification;
  torrents: Torrents;
  genres: string[];
  images: Images;
  rating: Rating;
}

export enum Certification {
  G = 'G',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
}

export interface Images {
  poster: string;
  fanart: string;
  banner: string;
}

export interface Rating {
  percentage: number;
  watching: number;
  votes: number;
  loved: number;
  hated: number;
}

export interface Torrents {
  en: { [key: string]: En };
}

export interface En {
  provider: Provider;
  filesize: string;
  size: number;
  peer: number;
  seed: number;
  url: string;
}

export enum Provider {
  Yify = 'YIFY',
  Yts = 'YTS',
}
