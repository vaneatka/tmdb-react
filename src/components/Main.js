import React from 'react';
import DbApi from '../services/request';

const  newDbApi = new DbApi();
let all = [];

newDbApi.getTrendingAll().then(data => all = data);
console.log(all)
function Main() {
    return (
        <div>
            The main Paggeeee
        </div>
    )
}

export default Main;