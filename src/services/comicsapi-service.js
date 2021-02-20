export default class ComicsApiService {

  _apiBase = 'https://comicvine.gamespot.com/api';
  _apikey = '72dfade91996f3f9c1239106af6083c7bb4d6c08';
  _proxyurl = 'https://cors-anywhere.herokuapp.com/';

  getResource = async (url) => {
      const res = await fetch(`${this._proxyurl}${this._apiBase}${url}`);

      if (!res.ok) {
          throw new Error(`Could not fetch ${url} , received ${res.status}`)
      }
      return await res.json();
  }

  getAllCharacters = async (limit = 100, offset = 0) => {
      const res = await this.getResource(`/characters/?api_key=${this._apikey}&format=json&limit=${limit}&offset=${offset}`);
      return {
        total: res.number_of_total_results,
        characters: res.results.map(this._transformCharactersForGallery)
      };
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`/character/4005-${id}/?api_key=${this._apikey}&format=json&field_list=id,powers,api_detail_url,name,gender,aliases,birth,deck,image,description,first_appeared_in_issue,creators,origin,publisher,real_name,team_enemies,team_friends,teams,count_of_issue_appearances`);
    return this._transformCharacterObj(res.results);
  }

  getIssue = async (id) => {
    const res = await this.getResource(`/issue/4000-${id}/?api_key=${this._apikey}&format=json`);
    return this._transformIssue(res.results);
  }

  searchCharacters = async (query) => {
    const res = await this.getResource(`/characters/?api_key=${this._apikey}&format=json&filter=name:${query},aliases:${query},real_name:${query}`);
    return {
      total: res.number_of_total_results,
      characters: res.results.map(this._transformCharactersForGallery)
    };
  }


  getAllMovies = async (limit = 100, offset = 0) => {
    const res = await this.getResource(`/movies/?api_key=${this._apikey}&format=json&limit=${limit}&offset=${offset}`);
    return {
      total: res.number_of_total_results,
      movies: res.results.map(this._transformMoviesForGallery)
    };
  }

  getMovie = async (id) => {
    const res = await this.getResource(`/movie/4025-${id}/?api_key=${this._apikey}&format=json`);
    return this._transformMovie(res.results);
  }

  searchMovies = async (query) => {
    const res = await this.getResource(`/movies/?api_key=${this._apikey}&format=json&filter=name:${query}`);
    return {
      total: res.number_of_total_results,
      movies: res.results.map(this._transformMoviesForGallery)
    };
  }

  _transformCharactersForGallery = (character) => {
    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      summary: character.publisher ? character.publisher.name: null,
      image: character.image ? character.image.original_url : null,
      description: character.deck
    }
  }

  _transformCharacterObj = (character) => {
    const characterObj = this._transformCharacter(character);
    const issueId = character.first_appeared_in_issue.id;
    const result = this.getIssue(issueId)
        .then((issue) => {
          const firstAppeared = {
            firstAppearedIssue: issue
          };
          return Object.assign({}, characterObj, firstAppeared);
        })
        .catch((err) => console.log(`Error! Can't get issue id: ${issueId}. ${err}`));
    return result;
  }

  _transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      birthDate: character.birth, 
      realName: character.real_name,
      origin: character.origin ? character.origin.name: null,
      publisher: character.publisher,
      image: character.image ? character.image.original_url : null,
      aliases: character.aliases,
      countOfIssueAppearances: character.count_of_issue_appearances,
      description: character.description,
      summary: character.deck,
      powers: character.powers,
      url: character.api_detail_url,
      firstAppearedIssue: character.first_appeared_in_issue,
      creators: character.creators,
      teamEnemies: character.team_enemies,
      teamFriends: character.team_friends,
      teams: character.teams
    }
  }




  _transformIssue = (issue) => {
    return {
      id: issue.id,
      name: issue.name,
      description: issue.description,
      issueNumber: issue.issue_number,
      image: issue.image ? issue.image.original_url : null,
      storeDate: issue.store_date,
      volume: issue.volume
    }
  }


  _transformMoviesForGallery = (movie) => {
    const rating = movie.rating && movie.rating !== null ? `${movie.rating} | ` : '';
    const runtime = movie.runtime && movie.runtime !== null ? `${movie.runtime} min` : '';
    const summary = `${rating}${runtime}`;

    return {
      id: movie.id,
      name: movie.name,
      description: movie.description,
      image: movie.image ? movie.image.original_url : null,
      deck: movie.deck,
      summary
    }
  }

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      name: movie.name,
      writers: movie.writers,
      description: movie.description,
      image: movie.image ? movie.image.original_url : null,
      boxOfficee: movie.box_office_revenue,
      budget: movie.budget,
      characters: movie.characters,
      concepts: movie.concepts,
      summary: movie.deck,
      producers: movie.producers,
      rating: movie.rating,
      runtime: movie.runtime,
      studios: movie.studios,
      teams: movie.teams,
      totalRevenue: movie.total_revenue
    }
  }




}