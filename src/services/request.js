import React from 'react';

import axios from 'axios';

const AUTH_KEY = '?api_key=7134f742d92dc0a016cb513674a704a5';
const URL = 'https://api.themoviedb.org/3';

const get_movie_genres = () =>{
    let suffics = '/genre/movie/list';
    let data;
    axios.get( URL + suffics + AUTH_KEY )
                                        .then((response)=>console.log(response))
                                        .catch((error)=> console.log(error));
    return data;
};


const get_tv_genres = () =>{
    let suffics = '/genre/movie/list';
    let data;
    axios.get( URL + suffics + AUTH_KEY )
                                        .then((response)=>console.log(response))
                                        .catch((error)=> console.log(error));
    return data;
};

const get_movies_by_keyword = (keyword, keyword_id) =>{
    let suffics = `/${keyword}/${keyword_id}/movies`;
    let data;
    axios.get( URL + suffics + AUTH_KEY )
                                        .then((response)=>console.log(response))
                                        .catch((error)=> console.log(error));
    return data;
};

const get_specific = (keyword, keyword_id) =>{
    let suffics = `/${keyword}/${keyword_id}`;
    let data;
    axios.get( URL + suffics + AUTH_KEY )
                                        .then((response)=>console.log(response))
                                        .catch((error)=> console.log(error));
    return data;
};


export {
    get_specific,
    get_movies_by_keyword
} ;


