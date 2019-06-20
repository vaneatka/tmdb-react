
export default class DbApi {
    
     AUTH_KEY = 'api_key=7134f742d92dc0a016cb513674a704a5';
     _apiURL = 'https://api.themoviedb.org/3';

     async getResource(url) {
          const res = await fetch(`${this._apiURL}${url}${this.AUTH_KEY}`);
      
          if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`)
          }
          return await res.json();
        }

        
        getAllPopularMovies = async () => {
             const res = await this.getResource(`/movie/popular?`);
             return res.results;
          }
       
          geMovieGenres = async () => {
             const res = await this.getResource(`/genre/movie/list?`);
             return res.genres;
          }
       
           getTvGenres = async () => {
             const res = await this.getResource(`/genre/tv/list?`);
             return res.genres;
           }

           getMovie = async (genres_id) => {             
             const res = await this.getResource(`/discover/movie?with_genres=${genres_id}&sort_by=popularity.desc&`);
             return res;
           }
         
           
          
          
          
     } 