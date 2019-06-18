
export default class DbApi {
    
     AUTH_KEY = '?api_key=7134f742d92dc0a016cb513674a704a5';
     URL = 'https://api.themoviedb.org/3';

     

//       get_popular_movies =  () =>{
//         var some_data = [];  
//          fetch(`${this.URL}/movie/popular${this.AUTH_KEY}`).then(response => response.json()).then(data => {some_data = data.results; console.log(some_data); return} )
//                                                                                             .catch(err=>console.log('error is ',err));               
//          return  some_data;
//     } 
      get_popular_movies = async () =>{
        var some_data = await fetch(`${this.URL}/movie/popular${this.AUTH_KEY}`);               
         return await some_data.json();
    } 










    //  get_movie_genres = async () =>{
    //     let suffics = '/genre/movie/list'; 
    //     let res; 
    //     await axios.get( this.URL + suffics + this.AUTH_KEY ).then(response => res = response);        
        
    //     return res.data.genres;
    // };
    
    
    //  get_tv_genres = () =>{
    //     let suffics = '/genre/movie/list';
    //     let data;
    //     axios.get( this.URL + suffics + this.AUTH_KEY )
    //     .then((response)=>data=response)
    //     .catch((error)=> console.log(error));
    //     return data;
    // };
    
    //  get_movies_by_keyword = (keyword, keyword_id) =>{
    //     let suffics = `/${keyword}/${keyword_id}/movies`;
    //     let data = {};
    //     axios.get( this.URL + suffics + this.AUTH_KEY )
    //     .then((response) => {
    //         data = response;
    //     } )
    //     .catch((error)=> console.log(error));
    //     return data;
    // };
    
    //  get_specific = (keyword, keyword_id) =>{
    //     let suffics = `/${keyword}/${keyword_id}`;
    //     let data;
    //     axios.get( this.URL + suffics + this.AUTH_KEY )
    //     .then((response)=>data=response)
    //     .catch((error)=> console.log(error));
    //     return data;
    // };
    
} 
    
    
    
    