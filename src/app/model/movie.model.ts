export class Movie {
    id: number;
    name: string;
    poster: string;
    date: string;
    description: string;

    constructor(id: number, name: string, poster: string, releaseDate: string, description: string) {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.date = releaseDate;
        this.description = description;
      }
}